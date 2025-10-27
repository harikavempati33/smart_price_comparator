import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Bot, User, Minimize2, Maximize2, ShoppingCart, MapPin, Search } from "lucide-react";
import { getAllProducts, searchProducts } from "@shared/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  suggestions?: string[];
  productRecommendations?: any[];
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm your PriceCompare AI assistant. I can help you find the best deals, compare prices, locate nearby stores, and answer questions about products. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
      suggestions: ["Find best smartphone deals", "Compare laptop prices", "Locate nearby electronics stores", "Show me trending products"]
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateAIResponse = async (userMessage: string): Promise<Message> => {
    const lowerMessage = userMessage.toLowerCase();

    // Simulate AI thinking time
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));

    let response = "";
    let suggestions: string[] = [];
    let productRecommendations: any[] = [];

    // Get all products for recommendations
    const allProducts = getAllProducts();

    // Product search queries
    if (lowerMessage.includes('smartphone') || lowerMessage.includes('phone') || lowerMessage.includes('mobile')) {
      const smartphones = allProducts.filter(p => p.category === 'Smartphones').slice(0, 4);
      productRecommendations = smartphones;
      response = `I found ${smartphones.length} great smartphone deals for you! Here are the top recommendations based on different price ranges and the best current prices:`;
      suggestions = ["Compare iPhone prices", "Show budget smartphones", "Find local mobile stores", "Latest smartphone deals"];
    }
    else if (lowerMessage.includes('laptop') || lowerMessage.includes('computer')) {
      const laptops = allProducts.filter(p => p.category === 'Laptops').slice(0, 4);
      productRecommendations = laptops;
      response = `Great choice! I found ${laptops.length} excellent laptop options for you with real-time pricing from all major platforms:`;
      suggestions = ["Gaming laptops", "Work laptops under ₹60,000", "MacBook deals", "Compare laptop specifications"];
    }
    else if (lowerMessage.includes('watch') || lowerMessage.includes('smartwatch')) {
      const watches = allProducts.filter(p => p.category === 'Smartwatches' || p.category === 'Traditional Watches').slice(0, 4);
      productRecommendations = watches;
      response = `I found ${watches.length} fantastic watch options for you, including both smartwatches and traditional timepieces with competitive pricing:`;
      suggestions = ["Apple Watch deals", "Best fitness trackers", "Luxury watch stores", "Smart vs traditional watches"];
    }
    else if (lowerMessage.includes('shoes') || lowerMessage.includes('sneakers')) {
      response = "Perfect! I can help you find great deals on footwear:\n\n• **Running:** Nike Air Zoom, Adidas Ultraboost\n• **Casual:** Converse Chuck Taylor, Vans Old Skool\n• **Formal:** Clarks, Bata, Liberty\n• **Sports:** Under Armour, Asics, New Balance\n\nFor fashion shoes, I can also check Myntra and Ajio for exclusive deals!";
      suggestions = ["Running shoes under ₹5,000", "Formal shoes deals", "Compare Nike vs Adidas", "Myntra shoe offers"];
    }
    else if (lowerMessage.includes('store') || lowerMessage.includes('location') || lowerMessage.includes('near')) {
      response = "I can help you find nearby stores! Based on your location, here are some options:\n\n• **Electronics:** TechWorld Store (1.2km), Mobile Planet (2.1km)\n• **Fashion:** Lifestyle (0.8km), Shoppers Stop (1.5km)\n• **Appliances:** Croma (2.3km), Reliance Digital (1.8km)\n\nWould you like directions to any specific store or product category?";
      suggestions = ["Get directions to nearest store", "Store contact numbers", "Store opening hours", "Online vs store prices"];
    }
    else if (lowerMessage.includes('price') || lowerMessage.includes('compare') || lowerMessage.includes('cheap') || lowerMessage.includes('deal')) {
      response = "I'm excellent at finding the best deals! Here's how I can help:\n\n• **Real-time Price Comparison:** Amazon, Flipkart, Myntra, Ajio, Local stores\n• **Price History:** Track price drops and trends\n• **Deal Alerts:** Get notified when prices drop\n• **Best Value:** Find products with highest ratings vs price\n\nWhat product are you looking to buy? I'll find the best price for you!";
      suggestions = ["Best deals today", "Price drop alerts", "Compare all platforms", "Cashback offers"];
    }
    else if (lowerMessage.includes('furniture') || lowerMessage.includes('home') || lowerMessage.includes('decor')) {
      response = "Looking to furnish your home? Here are great options:\n\n• **Budget Furniture:** IKEA, Nilkamal, HomeTown\n• **Premium:** Urban Ladder, Pepperfry, West Elm\n• **Home Appliances:** LG, Samsung, Bosch, Whirlpool\n• **Decor:** Fabindia, Good Earth, Home Centre\n\nWhat room are you looking to furnish?";
      suggestions = ["IKEA vs Urban Ladder", "Living room furniture", "Kitchen appliances deals", "Home decor under ₹5,000"];
    }
    else if (lowerMessage.includes('cosmetics') || lowerMessage.includes('beauty') || lowerMessage.includes('makeup')) {
      response = "I can help you find amazing beauty deals! Here's what's trending:\n\n• **Skincare:** L'Oreal, Lakme, Himalaya, Plum\n• **Makeup:** MAC, Maybelline, Sugar, Nykaa\n• **Hair Care:** TRESemmé, Pantene, L'Oreal\n• **Men's Grooming:** Gillette, Park Avenue, The Man Company\n\nNykaa often has exclusive deals, should I check there?";
      suggestions = ["Nykaa vs Amazon beauty", "Skincare routine products", "Best makeup brands", "Men's grooming deals"];
    }
    else if (lowerMessage.includes('help') || lowerMessage.includes('how') || lowerMessage.includes('what')) {
      response = "I'm here to help! Here's what I can do for you:\n\n✅ **Find Products:** Search across all categories and brands\n✅ **Price Comparison:** Real-time prices from all major platforms\n✅ **Store Locator:** Find nearby stores with directions\n✅ **Deal Alerts:** Notify you of price drops and special offers\n✅ **Product Recommendations:** Suggest products based on your needs\n�� **Shopping Assistance:** Guide you through the buying process\n\nJust tell me what you're looking for, and I'll help you find the best deal!";
      suggestions = ["How to use price comparison", "Set up deal alerts", "Find store locations", "Contact customer support"];
    }
    else if (lowerMessage.includes('ai') || lowerMessage.includes('assistant') || lowerMessage.includes('you')) {
      response = "I'm PriceCompare AI, your intelligent shopping assistant! I'm powered by advanced algorithms that:\n\n🤖 **Analyze** millions of products and prices in real-time\n🔍 **Search** across 100+ brands and 1000+ stores\n📊 **Compare** prices, features, and reviews\n📍 **Locate** nearby stores and check availability\n💡 **Recommend** products based on your preferences\n\nI'm constantly learning to provide you with the best shopping experience. How can I assist you today?";
      suggestions = ["Show me trending products", "Best deals this week", "How accurate are your prices?", "Update my preferences"];
    }
    else {
      // Generic response with search
      response = `I searched for "${userMessage}" across our database. Here are some relevant suggestions:\n\n• Try searching for specific brands like "Apple iPhone" or "Samsung TV"\n• Browse categories like "smartphones", "laptops", "shoes", "watches"\n• Ask for price comparisons: "Compare iPhone vs Samsung"\n• Find stores: "Electronics stores near me"\n\nWhat specific product or service can I help you find?`;
      suggestions = ["Browse all categories", "Popular brands", "Today's best deals", "Store locations"];
    }

    return {
      id: Date.now().toString(),
      content: response,
      sender: 'ai',
      timestamp: new Date(),
      suggestions,
      productRecommendations
    };
  };

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: currentMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsTyping(true);

    try {
      const aiResponse = await generateAIResponse(currentMessage);
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      const errorMessage: Message = {
        id: Date.now().toString(),
        content: "I apologize, but I'm having trouble processing your request right now. Please try again in a moment or contact our customer support for assistance.",
        sender: 'ai',
        timestamp: new Date(),
        suggestions: ["Contact support", "Try again", "Browse categories", "Check system status"]
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setCurrentMessage(suggestion);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full bg-brand-500 hover:bg-brand-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <div className="absolute -top-2 -right-2">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[600px]'}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 bg-gradient-to-r from-brand-500 to-brand-600 text-white rounded-t-lg">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5 text-brand-500" />
            </div>
            <div>
              <CardTitle className="text-lg">AI Assistant</CardTitle>
              <p className="text-xs text-brand-100">Online • Ready to help</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-white hover:bg-brand-400"
            >
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-brand-400"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="p-0 flex flex-col h-[536px]">
            {/* Messages Area */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                      <div className={`flex items-start space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          message.sender === 'user' 
                            ? 'bg-brand-500 text-white' 
                            : 'bg-gray-100 text-brand-500'
                        }`}>
                          {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className={`rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-brand-500 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm whitespace-pre-line">{message.content}</p>
                          <p className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-brand-100' : 'text-gray-500'
                          }`}>
                            {formatTime(message.timestamp)}
                          </p>
                        </div>
                      </div>
                      
                      {message.suggestions && (
                        <div className="mt-2 space-y-1">
                          {message.suggestions.map((suggestion, index) => (
                            <Button
                              key={index}
                              variant="outline"
                              size="sm"
                              onClick={() => handleSuggestionClick(suggestion)}
                              className="mr-1 mb-1 text-xs h-7"
                            >
                              {suggestion}
                            </Button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="w-8 h-8 rounded-full bg-gray-100 text-brand-500 flex items-center justify-center">
                        <Bot className="h-4 w-4" />
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="border-t p-4">
              <div className="flex space-x-2">
                <Input
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Ask me anything about products, prices, or stores..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} disabled={isTyping || !currentMessage.trim()}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex justify-center mt-2">
                <p className="text-xs text-gray-500">
                  AI-powered shopping assistant • Always learning
                </p>
              </div>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
