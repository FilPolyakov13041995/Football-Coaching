// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Item in *Footer → Images*
 */
export interface FooterDocumentDataImagesItem {
  /**
   * Image field in *Footer → Images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Link field in *Footer → Images*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.images[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Title field in *Footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Address field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.address
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  address: prismic.KeyTextField;

  /**
   * Phone field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.phone
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone: prismic.KeyTextField;

  /**
   * Email field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField;

  /**
   * Images field in *Footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<FooterDocumentDataImagesItem>>;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type PageDocumentDataSlicesSlice =
  | ContactsSlice
  | ServicesSlice
  | SchoolSlice
  | AboutMeSlice
  | ConnectionSlice
  | CardSlice
  | WelcomeSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *Settings → Logo*
 */
export interface SettingsDocumentDataLogoItem {
  /**
   * Logo field in *Settings → Logo*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo[].logo
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Logo link field in *Settings → Logo*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo[].logo_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  logo_link: prismic.LinkField;
}

/**
 * Item in *Settings → Navigation*
 */
export interface SettingsDocumentDataNavigationItem {
  /**
   * Link field in *Settings → Navigation*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Settings → Navigation*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Meta Title field in *Settings*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  meta_title: prismic.RichTextField;

  /**
   * Meta Description field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.meta_description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * OG image field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.og_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  og_image: prismic.ImageField<never>;

  /**
   * Logo field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.logo[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  logo: prismic.GroupField<Simplify<SettingsDocumentDataLogoItem>>;

  /**
   * Navigation field in *Settings*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.navigation[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  navigation: prismic.GroupField<Simplify<SettingsDocumentDataNavigationItem>>;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes = FooterDocument | PageDocument | SettingsDocument;

/**
 * Primary content in *AboutMe → Primary*
 */
export interface AboutMeSliceDefaultPrimary {
  /**
   * Image field in *AboutMe → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *AboutMe → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * education_or_experience field in *AboutMe → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.education_or_experience
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  education_or_experience: prismic.RichTextField;

  /**
   * Items field in *AboutMe → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.items
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  items: prismic.RichTextField;
}

/**
 * Default variation for AboutMe Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutMeSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *AboutMe → Primary*
 */
export interface AboutMeSliceReversePrimary {
  /**
   * Image field in *AboutMe → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Name field in *AboutMe → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Education or Experience  field in *AboutMe → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.education_or_experience
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  education_or_experience: prismic.RichTextField;

  /**
   * Items field in *AboutMe → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_me.primary.items
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  items: prismic.RichTextField;
}

/**
 * reverse variation for AboutMe Slice
 *
 * - **API ID**: `reverse`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSliceReverse = prismic.SharedSliceVariation<
  "reverse",
  Simplify<AboutMeSliceReversePrimary>,
  never
>;

/**
 * Slice variation for *AboutMe*
 */
type AboutMeSliceVariation = AboutMeSliceDefault | AboutMeSliceReverse;

/**
 * AboutMe Shared Slice
 *
 * - **API ID**: `about_me`
 * - **Description**: AboutMe
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutMeSlice = prismic.SharedSlice<
  "about_me",
  AboutMeSliceVariation
>;

/**
 * Primary content in *Card → Primary*
 */
export interface CardSliceDefaultPrimary {
  /**
   * Title field in *Card → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *Card → Items*
 */
export interface CardSliceDefaultItem {
  /**
   * Image Card field in *Card → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: card.items[].image_card
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image_card: prismic.ImageField<never>;

  /**
   * Name Card field in *Card → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card.items[].name_card
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name_card: prismic.RichTextField;

  /**
   * Description Card field in *Card → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: card.items[].description_card
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description_card: prismic.KeyTextField;
}

/**
 * Default variation for Card Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardSliceDefaultPrimary>,
  Simplify<CardSliceDefaultItem>
>;

/**
 * Slice variation for *Card*
 */
type CardSliceVariation = CardSliceDefault;

/**
 * Card Shared Slice
 *
 * - **API ID**: `card`
 * - **Description**: Card
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardSlice = prismic.SharedSlice<"card", CardSliceVariation>;

/**
 * Primary content in *Connection → Primary*
 */
export interface ConnectionSliceDefaultPrimary {
  /**
   * Title field in *Connection → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: connection.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Button Link field in *Connection → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: connection.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Text field in *Connection → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: connection.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Primary content in *Connection → Items*
 */
export interface ConnectionSliceDefaultItem {
  /**
   * Images field in *Connection → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: connection.items[].images
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  images: prismic.ImageField<never>;

  /**
   * Description field in *Connection → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: connection.items[].description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Connection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ConnectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ConnectionSliceDefaultPrimary>,
  Simplify<ConnectionSliceDefaultItem>
>;

/**
 * Slice variation for *Connection*
 */
type ConnectionSliceVariation = ConnectionSliceDefault;

/**
 * Connection Shared Slice
 *
 * - **API ID**: `connection`
 * - **Description**: Connection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ConnectionSlice = prismic.SharedSlice<
  "connection",
  ConnectionSliceVariation
>;

/**
 * Primary content in *Contacts → Primary*
 */
export interface ContactsSliceDefaultPrimary {
  /**
   * Title field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Address field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.address
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address: prismic.RichTextField;

  /**
   * Address Item field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.address_item
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  address_item: prismic.RichTextField;

  /**
   * Phone field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.phone
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  phone: prismic.RichTextField;

  /**
   * Phone Item field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.phone_item
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  phone_item: prismic.RichTextField;

  /**
   * Email field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.email
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  email: prismic.RichTextField;

  /**
   * Email Item field in *Contacts → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.email_item
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  email_item: prismic.RichTextField;

  /**
   * Link School field in *Contacts → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.link_school
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link_school: prismic.LinkField;

  /**
   * Link Text field in *Contacts → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contacts.primary.link_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_text: prismic.KeyTextField;
}

/**
 * Default variation for Contacts Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Contacts*
 */
type ContactsSliceVariation = ContactsSliceDefault;

/**
 * Contacts Shared Slice
 *
 * - **API ID**: `contacts`
 * - **Description**: Contacts
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactsSlice = prismic.SharedSlice<
  "contacts",
  ContactsSliceVariation
>;

/**
 * Primary content in *School → Primary*
 */
export interface SchoolSliceDefaultPrimary {
  /**
   * Title field in *School → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: school.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Name field in *School → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: school.primary.name
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  name: prismic.RichTextField;

  /**
   * Image field in *School → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: school.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Text field in *School → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: school.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * Description field in *School → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: school.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Primary content in *School → Items*
 */
export interface SchoolSliceDefaultItem {
  /**
   * Images field in *School → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: school.items[].images
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  images: prismic.ImageField<never>;
}

/**
 * Default variation for School Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SchoolSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SchoolSliceDefaultPrimary>,
  Simplify<SchoolSliceDefaultItem>
>;

/**
 * Slice variation for *School*
 */
type SchoolSliceVariation = SchoolSliceDefault;

/**
 * School Shared Slice
 *
 * - **API ID**: `school`
 * - **Description**: School
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SchoolSlice = prismic.SharedSlice<"school", SchoolSliceVariation>;

/**
 * Primary content in *Services → Primary*
 */
export interface ServicesSliceDefaultPrimary {
  /**
   * Rich Text field in *Services → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.rich_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  rich_text: prismic.RichTextField;

  /**
   * Small Text field in *Services → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.small_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  small_text: prismic.RichTextField;

  /**
   * Button Link field in *Services → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Text field in *Services → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.primary.button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_text: prismic.KeyTextField;
}

/**
 * Primary content in *Services → Items*
 */
export interface ServicesSliceDefaultItem {
  /**
   * Images field in *Services → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].images
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  images: prismic.ImageField<never>;

  /**
   * Title field in *Services → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * Description field in *Services → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: services.items[].description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;
}

/**
 * Default variation for Services Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ServicesSliceDefaultPrimary>,
  Simplify<ServicesSliceDefaultItem>
>;

/**
 * Slice variation for *Services*
 */
type ServicesSliceVariation = ServicesSliceDefault;

/**
 * Services Shared Slice
 *
 * - **API ID**: `services`
 * - **Description**: Services
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ServicesSlice = prismic.SharedSlice<
  "services",
  ServicesSliceVariation
>;

/**
 * Primary content in *Welcome → Primary*
 */
export interface WelcomeSliceDefaultPrimary {
  /**
   * Welcome field in *Welcome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.primary.welcome
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  welcome: prismic.RichTextField;

  /**
   * Bold Text field in *Welcome → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.primary.bold_text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  bold_text: prismic.RichTextField;

  /**
   * Image field in *Welcome → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Description field in *Welcome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Default variation for Welcome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WelcomeSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *Welcome*
 */
type WelcomeSliceVariation = WelcomeSliceDefault;

/**
 * Welcome Shared Slice
 *
 * - **API ID**: `welcome`
 * - **Description**: Welcome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSlice = prismic.SharedSlice<
  "welcome",
  WelcomeSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataImagesItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SettingsDocument,
      SettingsDocumentData,
      SettingsDocumentDataLogoItem,
      SettingsDocumentDataNavigationItem,
      AllDocumentTypes,
      AboutMeSlice,
      AboutMeSliceDefaultPrimary,
      AboutMeSliceReversePrimary,
      AboutMeSliceVariation,
      AboutMeSliceDefault,
      AboutMeSliceReverse,
      CardSlice,
      CardSliceDefaultPrimary,
      CardSliceDefaultItem,
      CardSliceVariation,
      CardSliceDefault,
      ConnectionSlice,
      ConnectionSliceDefaultPrimary,
      ConnectionSliceDefaultItem,
      ConnectionSliceVariation,
      ConnectionSliceDefault,
      ContactsSlice,
      ContactsSliceDefaultPrimary,
      ContactsSliceVariation,
      ContactsSliceDefault,
      SchoolSlice,
      SchoolSliceDefaultPrimary,
      SchoolSliceDefaultItem,
      SchoolSliceVariation,
      SchoolSliceDefault,
      ServicesSlice,
      ServicesSliceDefaultPrimary,
      ServicesSliceDefaultItem,
      ServicesSliceVariation,
      ServicesSliceDefault,
      WelcomeSlice,
      WelcomeSliceDefaultPrimary,
      WelcomeSliceVariation,
      WelcomeSliceDefault,
    };
  }
}