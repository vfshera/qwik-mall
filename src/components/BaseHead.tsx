import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { SITE } from "@/data/config";

/**
 * The BaseHead component is placed inside of the document `<head>` element.
 */
export default component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  return (
    <>
      <title>
        {head.title === "" ? SITE.name : head.title + " - " + SITE.name}
      </title>

      <link rel="canonical" href={loc.url.pathname} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {head.meta.map((m) => (
        <meta {...m} />
      ))}

      {head.links.map((l) => (
        <link {...l} />
      ))}

      {head.styles.map((s) => (
        <style {...s.props} dangerouslySetInnerHTML={s.style} />
      ))}
    </>
  );
});
