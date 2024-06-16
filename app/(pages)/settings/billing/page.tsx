import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="container ">
      <form className="space-y-3">
        <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 md:p-8 flex">
            <div>
                <CardHeader>
                <CardTitle className="text-2xl font-bold">Website Builder Plan</CardTitle>
                <CardDescription className="text-gray-500 dark:text-gray-400">Easily create and manage your website.</CardDescription>
                </CardHeader>
            </div>
            <div>
                <CardContent className="text-4xl font-bold">R$120/mo</CardContent>
                <Button type="submit" className="w-64">Subscribe</Button>
            </div>
        </Card>
      </form>
    </div>
  )
}