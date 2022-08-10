import { FunctionComponent } from "react";
import Navbar from "../navbar";

// TypeScript error: Property 'children' does not exist on type 'ReactNode'
// https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
// The PropsWithChildren type is omitted after React 18, you have to include the children prop yourself
interface Props {
  children: React.ReactNode;
}

const BaseLayout: FunctionComponent<Props> = ({children}) => {
  
  return (
    <>
      <Navbar />
      <div className="py-16 bg-gray-50 overflow-hidden min-h-screen">
        <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
          {children}
        </div>
      </div>  
    </>
  )
}

export default BaseLayout;