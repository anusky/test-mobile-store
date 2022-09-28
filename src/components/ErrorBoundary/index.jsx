import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError();
  let message = "Something went wrong";
  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 404:
        message = "This page does not exist!";
        break;
      case 401:
        message = "You are not authorized to see this";
        break;
      case 503:
        message = "Looks like our API is down";
        break;
      case 418:
        message = "🫖";
        break;
      default:
        message = "Something went wrong";
    }
  }

  return (
    <div className="container mx-auto text-center grid gap-y-2 place-items-center py-8">
      <h1>Ooops</h1>
      <h3>{message}</h3>
      <Link
        to="/"
        className="rounded-lg border-slate-400 px-4 py-2 border-2 w-fit bg-slate-300"
      >
        Go back home
      </Link>
    </div>
  );
};

export default ErrorBoundary;
