import LoginCard from "@/components/login-card";
import SignupCard from "@/components/signup-card";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HouseIcon } from "lucide-react";

export default async function NotAuthorizedPage() {
  return (
    <div className="mx-auto flex flex-col gap-4 min-h-screen place-content-center">
      <Button variant="ghost" className="w-fit self-center text-2xl">
        <HouseIcon className="size-6" />
        Back Home
      </Button>
      <div>
        You are not authorized to view that page. Please Sign-In or Sign up
      </div>
      <Card className="flex p-4 w-full max-w-2xl h-[600px]">
        <Tabs defaultValue="login">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginCard />
          </TabsContent>
          <TabsContent value="signup">
            <SignupCard />
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}
