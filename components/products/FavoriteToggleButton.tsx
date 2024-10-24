import { FaHeart } from "react-icons/fa";
import { Button } from "@/components/ui/button";

//{ productId }: { productId: string }
function FavoriteToggleButton() {
  return (
    <Button size="icon" variant="outline" className="p-2 cursor-pointer">
      <FaHeart />
    </Button>
  );
}
export default FavoriteToggleButton;
