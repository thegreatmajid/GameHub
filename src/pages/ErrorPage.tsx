import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={10}>
        <Heading>خطا</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "صفحه ی مورد نظر یافت نشد ."
            : "متاسفانه خطایی ناشناخته رخ داده است ."}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
