import { Coffee, Mountain, TreePine } from "lucide-react";
import SectionTitle from "../shared/section-title";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle
          title="Why Choose Pahuwild?"
          subTitle=" We offer more than just accommodation - we provide gateways to
              nature's most beautiful sanctuaries."
        />
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center border-2 border-green-100 hover:border-green-200 transition-colors">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <TreePine className="h-8 w-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Pristine Locations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                Hand-picked cabins in the most beautiful and untouched
                wilderness areas, far from the crowds.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-amber-100 hover:border-amber-200 transition-colors">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                <Mountain className="h-8 w-8 text-amber-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Adventure Ready
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                Perfect base camps for hiking, fishing, stargazing, and all your
                favorite outdoor activities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-2 border-blue-100 hover:border-blue-200 transition-colors">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Coffee className="h-8 w-8 text-blue-600" />
              </div>
              <CardTitle className="text-2xl text-gray-900">
                Modern Comfort
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600 text-base">
                Rustic charm meets modern amenities. Enjoy nature without
                sacrificing comfort and convenience.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
