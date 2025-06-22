export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-amber-50 flex justify-center items-center">
      {children}
    </div>
  );
}
