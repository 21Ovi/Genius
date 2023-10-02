"use client";

import Heading from "@/components/heading";

import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";

const ConversationPage = () => {
  const defaultValues = { prompt: "" };

  const form = useForm({
    defaultValues,
  });

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model"
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8"></div>
    </div>
  );
};

export default ConversationPage;
