import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff, Mail, Lock, User, Phone, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sign In Form State
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  // Sign Up Form State
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    location: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  });

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Successfully signed in! Welcome back.", {
        description: "You'll be redirected to your dashboard.",
        action: {
          label: "Continue",
          onClick: () => console.log("Continue"),
        },
      });
      
      // Store auth state (in real app, this would be proper JWT handling)
      localStorage.setItem('userAuth', JSON.stringify({
        email: signInData.email,
        signedIn: true,
        timestamp: Date.now()
      }));
      
      // Redirect to home
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    }, 2000);
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (signUpData.password !== signUpData.confirmPassword) {
      toast.error("Passwords don't match", {
        description: "Please make sure both passwords are identical.",
      });
      return;
    }

    if (!signUpData.agreeToTerms) {
      toast.error("Please accept the terms and conditions", {
        description: "You must agree to our terms to create an account.",
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Account created successfully!", {
        description: "Welcome to PriceCompare! You can now enjoy exclusive deals.",
        action: {
          label: "Get Started",
          onClick: () => console.log("Get Started"),
        },
      });
      
      // Store auth state
      localStorage.setItem('userAuth', JSON.stringify({
        email: signUpData.email,
        name: `${signUpData.firstName} ${signUpData.lastName}`,
        signedIn: true,
        timestamp: Date.now()
      }));
      
      // Redirect to home
      setTimeout(() => {
        window.location.href = '/';
      }, 1500);
    }, 2000);
  };

  const handleGoogleAuth = () => {
    toast.info("Google Sign-In Coming Soon!", {
      description: "We're working on integrating Google authentication.",
    });
  };

  const handleFacebookAuth = () => {
    toast.info("Facebook Sign-In Coming Soon!", {
      description: "We're working on integrating Facebook authentication.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-[calc(100vh-80px)] p-4">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-brand-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">P</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">PriceCompare</h1>
            <p className="text-gray-600">Compare prices, save money</p>
          </div>

          <Card className="border-0 shadow-xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="signin">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              {/* Sign In Tab */}
              <TabsContent value="signin">
                <CardHeader className="text-center">
                  <CardTitle>Welcome Back</CardTitle>
                  <CardDescription>
                    Sign in to access exclusive deals and price alerts
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={signInData.email}
                          onChange={(e) => setSignInData(prev => ({ ...prev, email: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={signInData.password}
                          onChange={(e) => setSignInData(prev => ({ ...prev, password: e.target.value }))}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="remember"
                          checked={signInData.rememberMe}
                          onCheckedChange={(checked) => 
                            setSignInData(prev => ({ ...prev, rememberMe: checked as boolean }))
                          }
                        />
                        <label htmlFor="remember" className="text-sm text-gray-600">
                          Remember me
                        </label>
                      </div>
                      <Link to="/forgot-password" className="text-sm text-brand-600 hover:text-brand-700">
                        Forgot password?
                      </Link>
                    </div>

                    <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-600" disabled={isLoading}>
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>

                  <div className="mt-6">
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                      </div>
                      <div className="relative flex justify-center text-xs uppercase">
                        <span className="bg-white px-2 text-gray-500">Or continue with</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-6">
                      <Button variant="outline" onClick={handleGoogleAuth}>
                        <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        Google
                      </Button>
                      <Button variant="outline" onClick={handleFacebookAuth}>
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                        Facebook
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </TabsContent>

              {/* Sign Up Tab */}
              <TabsContent value="signup">
                <CardHeader className="text-center">
                  <CardTitle>Create Account</CardTitle>
                  <CardDescription>
                    Join thousands of smart shoppers and start saving today
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <form onSubmit={handleSignUp} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">First Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            type="text"
                            placeholder="First name"
                            value={signUpData.firstName}
                            onChange={(e) => setSignUpData(prev => ({ ...prev, firstName: e.target.value }))}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700">Last Name</label>
                        <Input
                          type="text"
                          placeholder="Last name"
                          value={signUpData.lastName}
                          onChange={(e) => setSignUpData(prev => ({ ...prev, lastName: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="email"
                          placeholder="Enter your email"
                          value={signUpData.email}
                          onChange={(e) => setSignUpData(prev => ({ ...prev, email: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Phone Number</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={signUpData.phone}
                          onChange={(e) => setSignUpData(prev => ({ ...prev, phone: e.target.value }))}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Location</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type="text"
                          placeholder="City, State"
                          value={signUpData.location}
                          onChange={(e) => setSignUpData(prev => ({ ...prev, location: e.target.value }))}
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={signUpData.password}
                          onChange={(e) => setSignUpData(prev => ({ ...prev, password: e.target.value }))}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <Input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={signUpData.confirmPassword}
                          onChange={(e) => setSignUpData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="terms"
                          checked={signUpData.agreeToTerms}
                          onCheckedChange={(checked) => 
                            setSignUpData(prev => ({ ...prev, agreeToTerms: checked as boolean }))
                          }
                          required
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                          I agree to the{" "}
                          <Link to="/terms" className="text-brand-600 hover:text-brand-700">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link to="/privacy" className="text-brand-600 hover:text-brand-700">
                            Privacy Policy
                          </Link>
                        </label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={signUpData.subscribeNewsletter}
                          onCheckedChange={(checked) => 
                            setSignUpData(prev => ({ ...prev, subscribeNewsletter: checked as boolean }))
                          }
                        />
                        <label htmlFor="newsletter" className="text-sm text-gray-600">
                          Subscribe to our newsletter for exclusive deals and price alerts
                        </label>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-600" disabled={isLoading}>
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </CardContent>
              </TabsContent>
            </Tabs>

            <CardFooter className="text-center">
              <div className="w-full">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Secure authentication</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">SSL Encrypted</Badge>
                  <Badge variant="outline" className="text-xs">GDPR Compliant</Badge>
                  <Badge variant="outline" className="text-xs">24/7 Support</Badge>
                </div>
              </div>
            </CardFooter>
          </Card>

          {/* Benefits */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Join PriceCompare and enjoy:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Exclusive deals</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Price drop alerts</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Wishlist & favorites</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
