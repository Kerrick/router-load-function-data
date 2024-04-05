import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <section class="text-gray-700 p-8">
      <h1>404: Not Found</h1>
      <A href="/">Go to Home</A>
    </section>
  );
}
