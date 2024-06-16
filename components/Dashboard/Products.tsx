import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { CardContext } from "@/Contexts/ChartsContext"
import { DateFormartter, priceFormatter } from "@/utils/formattersBRL"
import { useContext } from "react"

export function Product() {
  const { card } = useContext(CardContext)

  const popularProducts = card
    .filter(product => product.type === 'income')
    .sort((a, b) => b.sales - a.sales)
    .slice(0, 3);
  return (
    <Tabs defaultValue="product" className="w-3/4">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="product">Products</TabsTrigger>
        <TabsTrigger value="popular">Pupular Products</TabsTrigger>
      </TabsList>

      <TabsContent value="product" className="flex flex-wrap gap-2 justify-between w-full">
      {card.map(product => (
        <Card key={product.id} className="w-80">
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
            <CardDescription className="flex justify-between">
                <p>{product.type}</p>
                <p>{DateFormartter.format(new Date(product.createdAt))}</p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h1>{priceFormatter.format(product.price)}</h1>
          </CardContent>
        </Card>
      ))}
      </TabsContent>

      <TabsContent value="popular" className="flex flex-wrap gap-2 justify-between w-full">
        {popularProducts.map(product => (
          <Card key={product.id} className="w-80">
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
              <CardDescription className="flex justify-between">
                <p>{product.type}</p>
                <p>{DateFormartter.format(new Date(product.createdAt))}</p>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h1>{priceFormatter.format(product.price)}</h1>
            </CardContent>
          </Card>
        ))}
      </TabsContent>
    </Tabs>
  )
}
