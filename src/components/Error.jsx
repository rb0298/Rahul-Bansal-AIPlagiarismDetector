import { AlertCircle } from "lucide-react"

function Error({error}) {
    return (
        <div className="text-red-500 flex items-center">
        <AlertCircle className="mr-2" />
        {error}
      </div>
    )
}

export default Error
