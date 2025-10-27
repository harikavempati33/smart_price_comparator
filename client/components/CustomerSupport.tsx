import { useState } from "react";
import { Phone, Mail, MessageCircle, Clock, MapPin, ExternalLink, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function CustomerSupport() {
  const [selectedIssue, setSelectedIssue] = useState<string | null>(null);

  const supportChannels = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      contact: "+91-1800-123-4567",
      availability: "24/7 Available",
      responseTime: "Immediate",
      action: () => window.location.href = "tel:+911800123456"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help via chat",
      contact: "Chat Now",
      availability: "24/7 Available",
      responseTime: "< 2 minutes",
      action: () => {} // AI Assistant will handle this
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Detailed assistance via email",
      contact: "support@pricecompare.com",
      availability: "Always Open",
      responseTime: "< 4 hours",
      action: () => window.location.href = "mailto:support@pricecompare.com"
    }
  ];

  const commonIssues = [
    {
      category: "Orders & Payments",
      issues: [
        "How to place an order",
        "Payment failed or pending",
        "Order cancellation",
        "Refund status",
        "Invoice download"
      ]
    },
    {
      category: "Price Comparison",
      issues: [
        "Price accuracy verification",
        "Price alert setup",
        "Store availability check",
        "Product specifications",
        "Best deal recommendations"
      ]
    },
    {
      category: "Store Locator",
      issues: [
        "Find nearby stores",
        "Store contact details",
        "Directions and location",
        "Store hours and availability",
        "Product availability at stores"
      ]
    },
    {
      category: "Account & Technical",
      issues: [
        "Account creation issues",
        "Login problems",
        "Password reset",
        "App not working",
        "Website errors"
      ]
    }
  ];

  const contactDetails = {
    headquarters: {
      address: "PriceCompare Technologies Pvt Ltd\n123 Tech Park, Electronic City\nBangalore, Karnataka 560100",
      phone: "+91-80-4567-8900",
      email: "info@pricecompare.com"
    },
    regionalOffices: [
      {
        city: "Mumbai",
        address: "456 Business Center, Andheri East\nMumbai, Maharashtra 400069",
        phone: "+91-22-6789-0123"
      },
      {
        city: "Delhi",
        address: "789 Corporate Plaza, Gurgaon\nNew Delhi, NCR 122001",
        phone: "+91-11-5678-9012"
      },
      {
        city: "Chennai",
        address: "321 IT Corridor, OMR\nChennai, Tamil Nadu 600096",
        phone: "+91-44-3456-7890"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're here to help you 24/7. Get instant support for all your shopping and price comparison needs.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <Badge className="bg-green-500 hover:bg-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              99.9% Uptime
            </Badge>
            <Badge className="bg-blue-500 hover:bg-blue-600">
              <Star className="w-4 h-4 mr-1" />
              4.9/5 Support Rating
            </Badge>
            <Badge className="bg-purple-500 hover:bg-purple-600">
              <Clock className="w-4 h-4 mr-1" />
              24/7 Available
            </Badge>
          </div>
        </div>

        {/* Support Channels */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {supportChannels.map((channel, index) => {
            const IconComponent = channel.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" onClick={channel.action}>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-brand-600" />
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <p className="text-gray-600">{channel.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    <p className="font-semibold text-brand-600">{channel.contact}</p>
                    <p className="text-sm text-gray-600">{channel.availability}</p>
                    <Badge variant="outline" className="text-xs">
                      Response: {channel.responseTime}
                    </Badge>
                  </div>
                  <Button className="w-full bg-brand-500 hover:bg-brand-600">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Common Issues */}
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Common Questions & Issues</CardTitle>
            <p className="text-center text-gray-600">Find quick solutions to frequently asked questions</p>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commonIssues.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="font-semibold text-gray-900 mb-3 text-center">{category.category}</h3>
                  <div className="space-y-2">
                    {category.issues.map((issue, issueIndex) => (
                      <Button
                        key={issueIndex}
                        variant="ghost"
                        className="w-full justify-start text-left h-auto py-2 px-3 text-sm hover:bg-brand-50"
                        onClick={() => setSelectedIssue(issue)}
                      >
                        {issue}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {selectedIssue && (
              <div className="mt-8 p-6 bg-brand-50 rounded-lg border border-brand-200">
                <h4 className="font-semibold text-brand-900 mb-2">Selected Issue: {selectedIssue}</h4>
                <p className="text-brand-800 mb-4">
                  Our AI assistant can help you with "{selectedIssue}". Click the chat button in the bottom right corner to get instant help, 
                  or contact our support team using any of the methods above.
                </p>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-brand-500 hover:bg-brand-600">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Chat with AI
                  </Button>
                  <Button size="sm" variant="outline" onClick={() => setSelectedIssue(null)}>
                    Close
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Headquarters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Headquarters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="font-medium text-gray-900">Address:</p>
                  <p className="text-gray-600 whitespace-pre-line">{contactDetails.headquarters.address}</p>
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-gray-900">Phone:</p>
                    <a href={`tel:${contactDetails.headquarters.phone}`} className="text-brand-600 hover:text-brand-700">
                      {contactDetails.headquarters.phone}
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Email:</p>
                    <a href={`mailto:${contactDetails.headquarters.email}`} className="text-brand-600 hover:text-brand-700">
                      {contactDetails.headquarters.email}
                    </a>
                  </div>
                </div>
                <div className="pt-4">
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regional Offices */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Regional Offices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {contactDetails.regionalOffices.map((office, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{office.city}</h4>
                      <a href={`tel:${office.phone}`} className="text-brand-600 hover:text-brand-700 text-sm">
                        {office.phone}
                      </a>
                    </div>
                    <p className="text-gray-600 text-sm whitespace-pre-line">{office.address}</p>
                    {index < contactDetails.regionalOffices.length - 1 && <Separator className="mt-4" />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Emergency Support */}
        <Card className="mt-8 bg-red-50 border-red-200">
          <CardHeader>
            <CardTitle className="text-red-800 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Emergency Support
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Critical Issues</h4>
                <p className="text-red-800 text-sm mb-4">
                  For urgent issues like payment failures, account security, or technical emergencies:
                </p>
                <Button className="bg-red-600 hover:bg-red-700">
                  <Phone className="w-4 h-4 mr-2" />
                  Emergency Hotline: +91-1800-URGENT
                </Button>
              </div>
              <div>
                <h4 className="font-semibold text-red-900 mb-2">Business Hours</h4>
                <div className="text-red-800 text-sm space-y-1">
                  <p><strong>24/7 Support:</strong> All channels available</p>
                  <p><strong>Emergency:</strong> Immediate response</p>
                  <p><strong>General Queries:</strong> Within 4 hours</p>
                  <p><strong>Technical Issues:</strong> Within 1 hour</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
