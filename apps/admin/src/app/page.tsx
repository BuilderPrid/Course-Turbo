import Image from "next/image";
import { Card } from "@repo/ui/card";
import "@repo/shadcn/styles.css"
import {Button} from "@repo/shadcn/button"
import Status from '../components/status-checker'

export default function Page(): JSX.Element {
  return (
    <div className="flex flex-col h-screen items-center justify-center bg-red-400">
      <Status />
    </div>
  );
}
