export function FileTypeHandler({ extension } : { extension: string }) {
   switch (extension) {
      case "tsx":
         return <div>TypeScript TSX File</div>;
      case "java":
         return <div>Java File</div>;
      case "json":
         return <div>JSON File</div>;
      case "md":
         return <div>Markdown File</div>;
      case "ts":
         return <div>TypeScript File</div>;
      case "tf":
         return <div>Terraform File</div>;
      case "dockerfile":
         return <div>Dockerfile</div>;
      default:
         return <div>404</div>;   
   }
   
}