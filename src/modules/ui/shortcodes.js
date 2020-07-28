/** @jsx jsx */
import { Icon } from "@makerdao/dai-ui-icons";
import { Image, Text, Divider, Box, Flex, jsx } from "theme-ui";
import { motion } from "framer-motion";

import {
  Accordion,
  Button,
  Categories,
  Callout,
  Chocolate,
  Checklist,
  Code,
  Column,
  // CTA,
  StatusBanner,
  InfoBlock,
  List,
  Process,
  Table,
  Tout,
} from "@modules/ui/";

import { Link } from "@modules/navigation/";

import { Aligner, Video } from "@modules/utility/";

import { AuthorRenderer } from "@modules/authors";

import {
  TDRegion,
  TDStat,
  TDDonut,
  TDPie,
  TDRadial,
} from "@modules/transparency_dash";

//Markdown Component overrides
//Replace MDX html defaults with our custom implementation.

//For the complete available list see: https://www.gatsbyjs.org/docs/mdx/customizing-components/
const MD_Overrides = {
  a: (props) => <Link to={props.href} {...props} />,
  img: Image,
  h1: (props) => (
    <Text
      variant="h1"
      sx={{
        mb: "24px",
        fontSize: ["48px", "48px", "64px"],
        letterSpace: "64px",
        fontWeight: ["600", "600", "bold"],
        lineHeight: "normal",
        '&:not(:first-of-type)': {
          mt: '24px'
        }
      }}
      {...props}
    />
  ),
  h2: (props) => (
    <Text
      variant="h2"
      as="h2"
      sx={{
        mb: "32px",
        fontSize: "48px",
        fontWeight: "600",
        lineHeight: "normal",
        '&:not(:first-of-type)': {
          mt: '32px'
        }
      }}
      {...props}
    />
  ),
  h3: (props) => (
    <Text
      variant="h3"
      as="h3"
      sx={{
        mb: "32px",
        fontSize: "32px",
        fontWeight: "bold",
        lineHeight: "normal",
        '&:not(:first-of-type)': {
          mt: '32px'
        }
      }}
      {...props}
    />
  ),
  h4: (props) => (
    <Text
      variant="h4"
      as="h4"
      sx={{
        fontSize: "24px",
        fontWeight: "bold",
        mb: "32px",
        lineHeight: "normal",
        '&:not(:first-of-type)': {
          mt: '32px'
        }
      }}
      {...props}
    />
  ),
  h5: (props) => (
    <Text
      variant="h5"
      as="h5"
      sx={{ 
        mb: '32px',
        fontSize: "20px", 
        fontWeight: "normal", 
        lineHeight: "normal" ,
        '&:not(:first-of-type)': {
          mt: '32px'
        }
      }}
      {...props}
    />
  ),
  table: (props) => <Table {...props} />,
  thematicBreak: (props) => <Divider sx={{ my: 4 }} />,
  hr: (props) => <Divider sx={{ my: 4 }} />,
  p: (props) => (
    <Text
      sx={{ mb: "16px", "& .button": { display: "inline-block" } }}
      {...props}
    />
  ), //NOTE(Rejon): Don't add the as="p" prop to this text component, else you'll get warnings about our interweaving.
  blockquote: Callout,
  inlineCode: Code,
};

//Custom component fragments to be used in MDX.
//If you want to use a component, but want it's MDX fragment name to be different
//provide a key: Component (ie: {Carousel: CarouselComponent})
const Custom_Components = {
  Code,
  Text,
  Button,
  Callout,
  StatusBanner,
  Link,
  Box,
  Flex,
  Icon,
  CTA: Callout,
  Process,
  Image, //<- NOTE(Rejon): This is necessary so remark doesn't auto-wrap our component instead of the other way around.
  List,
  Aligner,
  Accordion,
  InfoBlock,
  Chocolate,
  Checklist,
  Categories,
  Tout,
  Column,
  Video,
  TDRegion,
  TDStat,
  TDDonut,
  TDPie,
  TDRadial,
  Authors: AuthorRenderer,
  motionDiv: motion.div,
  motionUL: motion.ul,
  motionLI: motion.li,
};

export default {
  ...MD_Overrides,
  ...Custom_Components,
};
