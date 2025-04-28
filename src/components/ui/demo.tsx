import { RainbowButton } from "./rainbow-button";
import { Sparkles } from "lucide-react";

export function RainbowButtonDemo() {
  return (
    <div className="flex flex-col gap-4 items-start">
      <RainbowButton>Default Button</RainbowButton>
      <RainbowButton variant="outline">Outline Button</RainbowButton>
      <RainbowButton size="sm">Small Button</RainbowButton>
      <RainbowButton size="lg">Large Button</RainbowButton>
      <RainbowButton className="gap-2">
        With Icon <Sparkles className="w-4 h-4" />
      </RainbowButton>
      <RainbowButton href="/demo" variant="ghost">Ghost Link</RainbowButton>
      <RainbowButton variant="link">Link Style</RainbowButton>
    </div>
  );
}