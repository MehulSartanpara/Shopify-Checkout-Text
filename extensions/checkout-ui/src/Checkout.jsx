import {
  useApi,
  useTranslate,
  reactExtension,
  Link,
  TextBlock,
  BlockStack,
  View,
} from '@shopify/ui-extensions-react/checkout';

export default reactExtension(
  'purchase.checkout.block.render',
  () => <Extension />,
);

function Extension() {
  const translate = useTranslate();
  const { extension } = useApi();

  return (
    <BlockStack>
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <Link to="https://www.google.com">Lorem ipsum</Link> dolor sit amet, consectetur adipiscing elit. 
        Sed imperdiet, velit eu condimentum aliquam, elit turpis aliquet elit, nec blandit risus arcu at nulla. <Link to="mailto:sartanparamehul@gmail.com">Lorem@example.com</Link> 
        &nbsp;or text us at (123) 456-7890. Curabitur sit amet leo ac felis facilisis sagittis. Proin vel quam quis justo pharetra scelerisque ac id elit.
      </TextBlock>
    </BlockStack>
  );
}