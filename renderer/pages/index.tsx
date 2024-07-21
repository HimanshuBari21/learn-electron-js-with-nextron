import React from "react";
import Head from "next/head";
import { Button, Title } from "@mantine/core";

export default function Page() {
  return (
    <>
      <Head>
        <title>Himanshu Bari</title>
      </Head>
      <Title order={1}>Hello, World!</Title>
      <Title order={2}>Hello, World!</Title>
      <Title order={3}>Hello, World!</Title>
      <Title order={4}>Hello, World!</Title>
      <Title order={5}>Hello, World!</Title>
      <Title order={6}>Hello, World!</Title>
      <Button>Hello</Button>
    </>
  );
}
