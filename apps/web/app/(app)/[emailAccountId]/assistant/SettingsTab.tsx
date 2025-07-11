import { AboutSetting } from "@/app/(app)/[emailAccountId]/assistant/AboutSetting";
import { DigestSetting } from "@/app/(app)/[emailAccountId]/assistant/DigestSetting";
import { DraftReplies } from "@/app/(app)/[emailAccountId]/assistant/DraftReplies";
import { Rules } from "@/app/(app)/[emailAccountId]/assistant/Rules";
import { RulesPrompt } from "@/app/(app)/[emailAccountId]/assistant/RulesPrompt";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SettingsTab() {
  return (
    <Tabs defaultValue="prompt" searchParam="settings-tab">
      <div className="flex items-center gap-2 pt-2">
        <span className="text-sm font-medium">View as:</span>
        <TabsList>
          <TabsTrigger value="prompt">Prompt</TabsTrigger>
          <TabsTrigger value="rules">Rules</TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="prompt">
        <RulesPrompt />
      </TabsContent>
      <TabsContent value="rules">
        <Rules />
      </TabsContent>

      <div className="mt-8 space-y-2">
        <DraftReplies />
        <AboutSetting />
        <DigestSetting />
      </div>
    </Tabs>
  );
}
