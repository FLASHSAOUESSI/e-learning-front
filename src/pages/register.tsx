import { AuthForm } from "@/components/auth-form";
import { register, type RegisterCredentials } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { GraduationCap } from "lucide-react";

export function RegisterPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleRegister = async (credentials: RegisterCredentials) => {
    try {
      const response = await register(credentials);
      console.log("Registration successful:", response);
      toast({
        title: "Account created",
        description: "Welcome to LearnHub! Please sign in with your new account.",
      });
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      toast({
        variant: "destructive",
        title: "Registration failed",
        description: "There was a problem creating your account. Please try again.",
      });
    }
  };

  return (
    <div className="container relative min-h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-primary" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <GraduationCap className="mr-2 h-6 w-6" />
          LearnHub
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "The beautiful thing about learning is that no one can take it away from you."
            </p>
            <footer className="text-sm">B.B. King</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] lg:w-[400px]">
          <AuthForm type="register" onSubmit={handleRegister} />
        </div>
      </div>
    </div>
  );
}