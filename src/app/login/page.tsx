import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 h-screen overflow-y-hidden">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                className="border-gray-300/50"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                required
                className="border-gray-300/50"
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>

            <form
              action={async () => {
                "use server";
                await signIn("google", { redirectTo: "/doctor" });
              }}
            >
              <Button
                type="submit"
                variant="outline"
                className="w-full border-gray-300/50"
              >
                Login with Google
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline">
              Sign up
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fviapais.com.ar%2Fresizer%2FI2HVb_BSzMIu8CIsiSMNtRvzMA4%3D%2F1023x1245%2Fsmart%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fgrupoclarin%2FE6ESF7YKCZFHBJRJMAHZE3JQBE.jpg&f=1&nofb=1&ipt=3d93311d9cbf2c9805f79d1737d8adb60c77c5ef0aae3eb6525bdf832faf4825&ipo=images"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
