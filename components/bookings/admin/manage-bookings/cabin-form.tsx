"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  AddCabin,
  UpdateCabin,
  uploadCabinImage,
} from "@/actions/cabin-action";
import { Cabin } from "@/types";

type CabinFormProps = {
  cabin?: Cabin;
  onClose: () => void;
};

const CabinForm = ({ cabin, onClose }: CabinFormProps) => {
  const isEditing = Boolean(cabin);

  const [name, setName] = useState(cabin?.name || "");
  const [slug, setSlug] = useState(cabin?.slug || "");

  const [price, setPrice] = useState(cabin?.price || "");
  const [guests, setGuests] = useState(cabin?.guests || "");
  const [location, setLocation] = useState(cabin?.location || "");
  const [description, setDescription] = useState(cabin?.description || "");

  const [options, setOptions] = useState({
    isFeatured: cabin?.isFeatured || false,
    isAvailable: cabin?.isAvailable || false,
  });

  const [amenities, setAmenities] = useState({
    wifi: cabin?.wifi || false,
    parking: cabin?.parking || false,
    kitchen: cabin?.kitchen || false,
    hotTub: cabin?.hotTub || false,
    fireplace: cabin?.fireplace || false,
    hiking: cabin?.hiking || false,
  });

  useEffect(() => {
    if (name) {
      const generatedSlug = name
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
      setSlug(generatedSlug);
    }
  }, [name]);

  const handleChangeOption = (name: string, checked: boolean) => {
    setOptions({ ...options, [name]: checked });
  };

  const handleChangeAmenity = (name: string, checked: boolean) => {
    setAmenities({ ...amenities, [name]: checked });
  };

  const formReducer = async (_state: unknown, formData: FormData) => {
    const imageFile = formData.get("imageFile") as File | null;

    if (isEditing && cabin) {
      formData.delete("imageFile");
      const result = await UpdateCabin(cabin.id, formData);

      if (imageFile && imageFile.size > 0) {
        await uploadCabinImage(
          cabin.id,
          imageFile,
          formData.get("slug") as string
        );
      }

      return result;
    } else {
      formData.delete("imageFile");
      const result = await AddCabin(formData);

      if (imageFile && imageFile.size > 0 && !result.error) {
        await uploadCabinImage(
          result.data.id,
          imageFile,
          formData.get("slug") as string
        );
      }

      return result;
    }
  };

  const [state, formAction] = useActionState(formReducer, {
    error: "",
    data: null,
  });

  // Close modal on successful submit
  useEffect(() => {
    if (!state.error && state.data) {
      onClose();
    }
  }, [state, onClose]);

  return (
    <form action={formAction}>
      <div className="space-y-4">
        <div>
          <Label htmlFor="name">Cabin Name</Label>
          <Input
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <input type="hidden" name="slug" value={slug} />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="price">Price per Night ($)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
            />
          </div>
          <div>
            <Label htmlFor="guests">Guest Capacity</Label>
            <Input
              id="guests"
              name="guests"
              type="number"
              value={guests}
              onChange={(e) => setGuests(Number(e.target.value))}
            />
          </div>
        </div>

        <div>
          <Label htmlFor="location">Location</Label>
          <Input
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div>
          <Label>Mark as</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Checkbox
                checked={options.isFeatured}
                onCheckedChange={(checked) =>
                  handleChangeOption("isFeatured", Boolean(checked))
                }
              />
              <label htmlFor="isFeatured" className="ml-2">
                Featured
              </label>
            </div>

            <div className="flex items-center">
              <Checkbox
                checked={options.isAvailable}
                onCheckedChange={(checked) =>
                  handleChangeOption("isAvailable", Boolean(checked))
                }
              />
              <label htmlFor="isAvailable" className="ml-2">
                Available
              </label>
            </div>
          </div>
        </div>

        <div>
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="image">Upload Image</Label>
          <Input
            type="file"
            accept="image/jpeg"
            name="imageFile"
            required={!isEditing}
          />
        </div>

        <div>
          <Label>Amenities</Label>
          <div className="grid grid-cols-3 gap-4">
            {Object.entries(amenities).map(([key, val]) => (
              <div key={key} className="flex items-center">
                <Checkbox
                  checked={val}
                  onCheckedChange={(checked) =>
                    handleChangeAmenity(key, Boolean(checked))
                  }
                />
                <label htmlFor={key} className="ml-2 capitalize">
                  {key}
                </label>
              </div>
            ))}
          </div>
        </div>

        {Object.entries({ ...options, ...amenities }).map(([key, val]) => (
          <input key={key} type="hidden" name={key} value={val.toString()} />
        ))}

        {state.error && (
          <p className="text-sm text-red-500 text-center">{state.error}</p>
        )}

        <div className="mt-5">
          <Button className="w-full cursor-pointer">
            {isEditing ? "Update Cabin" : "Save Cabin"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default CabinForm;
