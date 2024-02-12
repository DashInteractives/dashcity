import { Button } from "@nextui-org/button";

export default async function Home() {
  return (
    <>
      <div className="bg-background-100">
        <h1>Hello World</h1>
        <Button color="primary" size="lg">
          Primary
        </Button>
        <Button
          className="bg-accent-100 data-[hover=true]:bg-accent-200 border"
          size="lg"
        >
          Secondary
        </Button>
        <div className="bg-secondary h-16 w-16"></div>
      </div>
    </>
  );
}
