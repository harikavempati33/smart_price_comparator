import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface PlaceholderPageProps {
  title: string;
  description: string;
  suggestedPrompt?: string;
}

export default function PlaceholderPage({ 
  title, 
  description, 
  suggestedPrompt 
}: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Card className="max-w-2xl mx-4">
        <CardContent className="p-12 text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-brand-600" />
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{description}</p>
          
          {suggestedPrompt && (
            <div className="bg-brand-50 border border-brand-200 rounded-lg p-4 mb-8">
              <p className="text-sm text-brand-700 mb-2">
                <strong>Suggested prompt to continue:</strong>
              </p>
              <p className="text-brand-600 italic">"{suggestedPrompt}"</p>
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
            <Button className="bg-brand-500 hover:bg-brand-600">
              Chat with AI to Build This
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
