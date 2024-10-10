import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-3xl">Home Page</h1>
      <Button variant="destructive" size="lg" className="capitalize">
        click me
      </Button>
    </div>
  );
};
export default HomePage;
