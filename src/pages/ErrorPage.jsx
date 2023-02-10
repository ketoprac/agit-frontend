import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-2">Oops!</h1>
      <p className="font-semibold mb-2">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
