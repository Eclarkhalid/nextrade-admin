"use client"

import * as z from "zod";
import { Store } from "@prisma/client";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

interface SettingsFormProps {
      initialData: Store;
}

const formSchema  = z.object({
      name: z.string().min(1),
})

type SettingsFormValues = z.infer<typeof formSchema>;

const SettingsForm: React.FC<SettingsFormProps> = ({
      initialData
}) => {
      const [open, setOpen] = useState(false);
      const [loading, setLoading] = useState(false);

      const form = useForm<SettingsFormProps>({
            resolver: zodResolver(formSchema),
            defaultValues: initialData,
      });
      return <>
      <div className="flex items-center justify-between">
            <Heading
            title="Settings"
            description="Manage Store Preferences"
            />
            <Button variant={'destructive'}
            size={'sm'}
            onClick={() => {}}
            >
             <Trash className="h-4 w-4"/>
            </Button>
      </div>
      <Separator />
      </>
}
 
export default SettingsForm;