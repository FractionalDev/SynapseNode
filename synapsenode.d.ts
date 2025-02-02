import { AxiosResponse } from "axios";

export class Client {
  constructor(options: {
    client_id: string;
    client_secret: string;
    fingerprint: string;
    ip_address: string;
    isProduction: boolean;
  });

  // POST CREATE USER
  createUser(
    bodyParams: any,
    ip_address: string,
    options: {} | null
  ): Promise<User>;

  //VERIFY ADDRESS
  verifyAddress(queryParams?: {
    address_city: string;
    address_country_code: string;
    address_postal_code: string;
    address_street: string;
    address_subdivision: string;
  }): Promise<AxiosResponse<any>>;

  // GET ALL USERS
  getAllUsers(queryParams?: {
    query: any;
    page: number;
    per_page: number;
    show_refresh_tokens: any;
  }): Promise<AxiosResponse<any>>;

  // GET USER W/ USER_ID
  getUser(user_id: string, options: any | null): Promise<User>;

  // GET ALL PLATFORM TRANSACTIONS
  getPlatformTransactions(
    queryParams: { page: number; per_page: number } | {}
  ): Promise<AxiosResponse<any>>;

  // GET ALL PLATFORM NODES
  getPlatformNodes(
    queryParams?: { page: number; per_page: number } | {}
  ): Promise<AxiosResponse<any>>;

  // GET INSTITUTIONS
  getInstitutions(): Promise<AxiosResponse<any>>;

  // GET ISSUE PUBLIC KEY
  issuePublicKey(
    scope:
      | string[]
      | [
          "OAUTH|POST",
          "USERS|POST",
          "USERS|GET",
          "USER|GET",
          "USER|PATCH",
          "SUBSCRIPTIONS|GET",
          "SUBSCRIPTIONS|POST",
          "SUBSCRIPTION|GET",
          "SUBSCRIPTION|PATCH",
          "CLIENT|REPORTS",
          "CLIENT|CONTROLS"
        ]
  ): Promise<AxiosResponse<any>>;

  // POST CREATE SUBSCRIPTION
  createSubscription(
    url: string,
    scope:
      | string[]
      | [
          "USERS|POST",
          "USER|PATCH",
          "NODES|POST",
          "NODE|PATCH",
          "TRANS|POST",
          "TRAN|PATCH"
        ],
    idempotency_key?: string | null
  ): Promise<AxiosResponse<any>>;

  // GET ALL SUBSCRIPTIONS
  getAllSubscriptions(
    queryParams: { page: number; per_page: number } | {}
  ): Promise<AxiosResponse<any>>;

  // GET SUBSCRIPTION W/ SUBSCRIPTION_ID
  getSubscription(subscription_id: string);

  // PATCH UPDATE SUBSCRIPTION
  updateSubscription(
    subscription_id: string,
    bodyParams?: any | {}
  ): Promise<AxiosResponse<any>>;

  // GET LOCATE ATMS
  locateAtms(
    queryParams?:
      | {
          page: number;
          per_page: number;
          zip: string;
          radius: any;
          lat: any;
          lon: any;
        }
      | {}
  ): Promise<AxiosResponse<any>>;

  // GET CRYPTO QUOTES
  getCryptoQuotes(): Promise<AxiosResponse<any>>;

  // GET CRYPTO MARKET DATA
  getCryptoMarketData(
    queryParams?: { limit: number; currency: string } | {}
  ): Promise<AxiosResponse<any>>;

  // GET WEBHOOK LOGS
  getWebhookLogs(): Promise<AxiosResponse<any>>;

  // GET TRADE MARKET DATA
  getTradeMarketData(
    queryParams?: { ticker: any } | {}
  ): Promise<AxiosResponse<any>>;
}
export class User {
  id: string;
  body: any | ISynapseAccountResponse;
  host: any;
  fingerprint: string;
  ip_address: string;
  oauth_key: string;
  client: Client;
  headers: any;

  constructor({
    data,
    headerObj,
    client,
  }: {
    data: any;
    headerObj: any;
    client: Client;
  });

  // PATCH ADD USER KYC
  addUserKyc(bodyParams?: any | {}): Promise<AxiosResponse<any>>;

  // PATCH DELETE EXISTING DOCUMENT
  deleteExistingDocument(bodyParams?: any | {}): Promise<AxiosResponse<any>>;

  // PATCH UPDATE USER
  updateUser(bodyParams?: any | {}): Promise<AxiosResponse<any>>;

  // RETRIEVE REFRESH TOKEN
  _grabRefreshToken(): Promise<string>;

  // POST OAUTH USER
  _oauthUser(bodyParams?: any | {}): Promise<any>;

  // POST CREATE NODE
  createNode(
    bodyParams?: any | {},
    idempotency_key?: string | null
  ): Promise<AxiosResponse<any>>;

  // POST ACH-US MFA
  // submit answer to a mfa question from bank login attempt
  verifyAchMfa(
    access_token: string,
    mfa_answer: string,
    idempotency_key?: string | null
  ): Promise<AxiosResponse<any>>;

  // GET ALL USER NODES
  getAllUserNodes(
    queryParams?: { page: number; per_page: number; type: string } | {}
  ): Promise<AxiosResponse<any>>;

  // GET NODE W/ NODE_ID
  getNode(
    node_id: string,
    queryParams?: { full_dehydrate: "yes" | "no"; force_refresh: any } | {}
  ): Promise<AxiosResponse<any>>;

  // GET ALL USER TRANSACTIONS
  getUserTransactions(
    queryParams?: { page: number; per_page: number } | {}
  ): Promise<AxiosResponse<any>>;

  // GET TRIGGER DUMMY TRANSACTIONS
  triggerDummyTransactions(
    node_id: string,
    queryParams?:
      | {
          amount: number;
          foreign_transaction: "yes" | "no";
          is_credit: "yes" | "no";
          subnet_id: string;
          type: string;
        }
      | {}
  ): Promise<AxiosResponse<any>>;

  // PATCH GENERATE UBO FORM
  generateUboForm(bodyParams: any): Promise<AxiosResponse<any>>;

  // GET STATEMENTS BY USER
  getStatementsByUser(
    queryParams?: { page: number; per_page: number } | {}
  ): Promise<AxiosResponse<any>>;

  // GET STATEMENTS BY NODE
  getStatementsByNode(
    node_id: string,
    queryParams?: { page: number; per_page: number } | {}
  ): Promise<AxiosResponse<any>>;

  // PATCH SHIP DEBIT CARD NODE
  shipCardNode(node_id: string, bodyParams: any): Promise<AxiosResponse<any>>;

  // PATCH RESET DEBIT CARD NODE
  resetCardNode(node_id: string): Promise<AxiosResponse<any>>;

  // PATCH VERIFY MICRO-DEPOSITS
  verifyMicroDeposits(
    node_id: string,
    bodyParams: any
  ): Promise<AxiosResponse<any>>;

  // PATCH REINITIATE MICRO-DEPOSITS
  reinitiateMicroDeposits(node_id: string): Promise<AxiosResponse<any>>;

  // PATCH UPDATE NODE
  updateNode(node_id: string, bodyParams: any): Promise<AxiosResponse<any>>;

  // DELETE NODE
  deleteNode(node_id: string): Promise<AxiosResponse<any>>;

  // PATCH GENERATE APPLE PAY TOKEN
  generateApplePayToken(
    node_id: string,
    bodyParams: any
  ): Promise<AxiosResponse<any>>;

  // POST CREATE TRANSACTION
  createTransaction(
    node_id: string,
    bodyParams: any,
    idempotency_key: string | null
  ): Promise<AxiosResponse<any>>;

  // GET TRANSACTION W/ TRANSACTION_ID
  getTransaction(
    node_id: string,
    trans_id: string
  ): Promise<AxiosResponse<any>>;

  // GET ALL NODE TRANSACTIONS
  getAllNodeTransactions(
    node_id: string,
    queryParams?: { page: number; per_page: number }
  ): Promise<AxiosResponse<any>>;

  // DELETE TRANSACTION
  deleteTransaction(
    node_id: string,
    trans_id: string
  ): Promise<AxiosResponse<any>>;

  // PATCH COMMENT ON STATUS
  commentOnStatus(
    node_id: string,
    trans_id: string,
    bodyParams: any
  ): Promise<AxiosResponse<any>>;

  // PATCH DISPUTE CARD TRANSACTION
  disputeCardTransaction(
    node_id: string,
    trans_id: string,
    bodyParams: any
  ): Promise<AxiosResponse<any>>;

  // GET ALL SUBNETS
  getAllSubnets(
    node_id: string,
    queryParams?: { page: number; per_page: number }
  ): Promise<AxiosResponse<any>>;

  // GET SUBNET W/ SUBNET_ID
  getSubnet(node_id: string, subnet_id: string): Promise<AxiosResponse<any>>;

  // POST CREATE SUBNET
  createSubnet(
    node_id: string,
    bodyParams: any,
    idempotency_key: string | null
  ): Promise<AxiosResponse<any>>;

  // PATCH UPDATE SUBNET
  updateSubnet(
    node_id: string,
    subnet_id: string,
    bodyParams?: any
  ): Promise<AxiosResponse<any>>;

  // PATCH SHIP CARD SUBNET
  shipCard(
    node_id: string,
    subnet_id: string,
    bodyParams?: any
  ): Promise<AxiosResponse<any>>;

  // POST First call for registering new fingerprint
  registerNewFingerprint(fp: string): Promise<AxiosResponse<any>>;

  // POST Second call for registering new fingerprint
  supplyDevice2FA(fp: string, device: string): Promise<AxiosResponse<any>>;

  // POST Final call for registering new fingerprint
  verifyFingerprint2FA(
    fp: string,
    validation_pin: string
  ): Promise<AxiosResponse<any>>;

  // UPDATE USER IP ADDRESS
  updateIpAddress(ip: string): any;
}

/**
 *
 * Custom types based on the docs
 *
 */

// WE NEED TO LOOK AT ORGANIZING THE FOLLOWING AT SOME POINT

export interface ISynapseAccountResponse {
  _id?: string;
  _link?: {
    self?: {
      href?: string;
    };
  };
  account_closure_date?: number | null;
  client?: { id?: string; name?: string };
  emails?: string[];
  extra?: {
    cip_tag?: number;
    date_joined?: number;
    extra_security?: boolean;
    is_business?: boolean;
    is_trusted?: boolean;
    last_updated?: number;
    public_note?: null | string;
    supp_id?: string;
  };
  flag?: IUserFlags;
  flag_code?: IUserFlagCode | null;
  is_hidden?: boolean;
  legal_names?: string[];
  logins?: {
    email?: string;
    password?: string;
    scope?: string;
  }[];
  permission?: IPermissions;
  permission_code?: string | null;
  phone_numbers?: string[];
  photos?: any[];
  refresh_token?: string;
  watchlists?: IWatchlistValue;
  documents?: ISynapseBaseDocuments[];
  ips?: string[];
}

interface ISynapseBaseDocuments {
  id?: string;
  id_score?: number;
  is_active?: boolean;
  name?: string;
  maiden_name?: string;
  permission_scope?: string;
  entity_type?: IBusinessEntityType | IPersonalEntityType;
  entity_scope?: IEntityScope;
  trust_level?: ITrustLevel;
  email?: string;
  phone_number?: string;
  virtual_docs?: IVirtualDoc[];
  physical_docs?: IPhysicalDoc[];
  social_docs?: ISocialDoc[];
  watchlists?: string;
  address_city?: string;
  address_country_code?: string;
  address_postal_code?: string;
  address_street?: string;
  address_subdivision?: string;
  alias?: string;
  day?: number;
  month?: number;
  year?: number;
  company_activity?: string[];
  desired_scope?: string;
  doc_option_key?: string;
  docs_title?: string;
  edd_status?: IEddStatus;
  required_edd_docs?: string[]; //List of documents required for flagged users
  entity_relationship?: "CONTROLLING_PERSON" | "UBO";
  ip?: string;
  ownership_percentage?: number;
  screening_results?: IScreeningResponse;
  title?: string;
}

interface IGenericDoc {
  id: string;
  last_updated?: number;
  status?: IDocumentStatus;
  document_value?: string;
  document_type?: string;
  meta?: Record<string, string>;
}

interface ISocialDoc extends IGenericDoc {
  document_type?: ISocialDocumentType;
  info?: {
    address_street?: string;
    address_city?: string;
    address_subdivision?: string;
    address_postal_code?: string;
    address_country_code?: string;
    address_care_of?: string;
    invalid_reasons?: "invalid_address" | "address_has_incorrect_unit";
  };
  meta?: {
    state_code?: string;
    country_code?: string;
    address_street?: string;
    address_city?: string;
    address_subdivision?: string;
    address_postal_code?: string;
    address_country_code?: string;
    address_care_of?: string;
  };
}

interface IPhysicalDoc extends IGenericDoc {
  document_type?: IPhysicalDocumentType;
  invalid_reasons?: IPhysicalDocInvalidReasons;
  meta?: {
    state_code?: string;
    country_code?: string;
    id_number?: string;
  };
}

interface IVirtualDoc extends IGenericDoc {
  document_type?: IVirtualDocumentType;
  meta?: {
    address_country_code?: string;
  };
}

export type IPhysicalDocInvalidReasons =
  | "wrong_file_extension"
  | "image_not_found"
  | "black_and_white_image"
  | "palettised_image"
  | "poor_image_quality"
  | "name_mismatch"
  | "dob_mismatch"
  | "face_undetected"
  | "mrz_undetected"
  | "name_mismatch_mrz"
  | "flagged_for_failing_security_feature"
  | "flagged_for_potential_fraud"
  | "company_name_mismatch"
  | "tax_id_mismatch"
  | "irs_logo_undetected"
  | "poor_video_quality"
  | "poor_image_and_video_quality"
  | "image_face_undetected"
  | "video_face_undetected"
  | "face_mismatch"
  | "audio_comparision_failed"
  | "audio_undetected"
  | "image_too_large"
  | "address_mismatch"
  | "expired_document"
  | "expired_document_possible_misread_retry"
  | "date_not_detected"
  | "logo_not_detected"
  | "unable_to_classify_as_bank_or_bill"
  | "date_or_logo_failed"
  | "atleast_one_text_field_failed"
  | "hq_logo_hq_address_or_date"
  | "hq_logo_mq_address_and_date";

export type IEddStatus = "VALID" | "INVALID" | "REVIEWING";

export type ITrustLevel = "low" | "med" | "high";

export type IWatchlistValue =
  | "PENDING"
  | "SOFT_MATCH|PENDING_UPLOAD"
  | "MATCH"
  | "SOFT_MATCH"
  | "NO_MATCH"
  | "FALSE_POSITIVE";

export type IPermissions =
  | "VERIFIED"
  | "UNVERIFIED"
  | "RECEIVE"
  | "SEND-AND-RECEIVE"
  | "LOCKED"
  | "CLOSED"
  | "MAKE-IT-GO-AWAY";

export type IUserFlags = "NOT-FLAGGED" | "FLAGGED";

export type IUserFlagCode =
  | "NOT_KNOWN"
  | "ACCOUNT_CLOSURE|BLOCKED_INDUSTRY"
  | "ACCOUNT_CLOSURE|HIGH_RISK"
  | "PENDING_UPLOAD|DOC_REQUEST|CIP"
  | "PENDING_UPLOAD|DOC_REQUEST|UAR"
  | "PENDING_UPLOAD|DOC_REQUEST|SECURITY"
  | "PENDING_REVIEW|DOC_REQUEST|CIP"
  | "PENDING_REVIEW|DOC_REQUEST|UAR"
  | "PENDING_REVIEW|DOC_REQUEST|SECURITY"
  | "PENDING_REVIEW|ACCOUNT_CLOSURE|BLOCKED_INDUSTRY"
  | "PENDING_REVIEW|ACCOUNT_CLOSURE|HIGH_RISK";

export type IDocumentStatus =
  | "SUBMITTED|REVIEWING"
  | "SUBMITTED|VALID"
  | "SUBMITTED|INVALID"
  | "SUBMITTED";

export type IVirtualDocumentType =
  | "SSN"
  | "PASSPORT"
  | "DRIVERS_LICENSE"
  | "PERSONAL_IDENTIFICATION"
  | "TIN"
  | "DUNS"
  | "CITIZENSHIP"
  | "STATE_IDENTIFICATION_FOREIGN"
  | "FATHER_FULL_NAME"
  | "MOTHER_FULL_NAME"
  | "DTI"
  | "OTHER";

export type ISocialDocumentType =
  | "EMAIL_2FA"
  | "PHONE_NUMBER_2FA"
  | "EMAIL"
  | "IP"
  | "FACEBOOK"
  | "LINKEDIN"
  | "TWITTER"
  | "PHONE_NUMBER"
  | "WEBSITE"
  | "EMPLOYER"
  | "UNIVERSITY"
  | "OTHER"
  | "MAILING_ADDRESS";

export type IPhysicalDocumentType =
  | "GOVT_ID"
  | "GOVT_ID_INT"
  | "GOVT_ID_BACK"
  | "GOVT_ID_INT_BACK"
  | "VIDEO_AUTHORIZATION"
  | "SELFIE"
  | "PROOF_OF_ADDRESS"
  | "PROOF_OF_INCOME"
  | "PROOF_OF_ACCOUNT"
  | "AUTHORIZATION"
  | "SSN_CARD"
  | "EIN_DOC"
  | "SS4_DOC"
  | "W9_DOC"
  | "W8_DOC"
  | "W2_DOC"
  | "VOIDED_CHECK"
  | "AOI"
  | "BYLAWS_DOC"
  | "LOE"
  | "COI"
  | "LBL"
  | "SUBSIDIARY_DOC"
  | "AML_POLICY"
  | "BUSINESS_PLAN"
  | "MTL"
  | "MSB"
  | "SECURITY_AUDIT"
  | "BSA_AUDIT"
  | "SOC_AUDIT"
  | "STATE_AUDIT"
  | "BUSINESS_INSURANCE"
  | "TOS"
  | "KYC_POLICY"
  | "CIP_DOC"
  | "SUBSCRIPTION_AGREEMENT"
  | "PROMISSORY_NOTE"
  | "LEGAL_AGREEMENT"
  | "REG_GG"
  | "DEPOSIT_AGREEMENT"
  | "DBA_DOC"
  | "OTHER"
  | "BG_CHECK"
  | "BG_CHECK_CONSENT"
  | "ARTICLES_ORGANIZATION"
  | "MEMO_OF_INCORPORATION"
  | "PASSPORT_BIODATA"
  | "PASSPORT_INFO"
  | "VISA"
  | "BUSINESS_LICENSE"
  | "FOREIGN_ENTITY_REGISTRATION"
  | "POSOF"
  | "PROFIT_LOSS"
  | "BANK_STATEMENT"
  | "1099-MISC"
  | "PAYSTUB"
  | "INVOICE"
  | "MORTGAGE_STATEMENT"
  | "PROPERTY_TAX_RECEIPT"
  | "LEASE_AGREEMENT"
  | "UNIVERSITY_LEASE"
  | "UTILITY_BILL"
  | "FORM_I94"
  | "FORM_I20"
  | "FORM_DS2019"
  | "FORM_I797"
  | "EMPLOYMENT_AUTHORIZATION_CARD"
  | "PERMANENT_RESIDENT_CARD"
  | "PERMANENT_RESIDENT_CARD_BACK"
  | "NATIONAL_ID"
  | "NATIONAL_ID_BACK"
  | "PASSPORT_CARD"
  | "DRIVER_LICENSE"
  | "DRIVER_LICENSE_BACK"
  | "VOTER_REGISTRATION_CARD"
  | "VOTER_REGISTRATION_CARD_BACK"
  | "LEGAL_OPINION_LETTER"
  | "NO_ACTION_LETTER"
  | "CUSTOMERS_BY_REVENUE"
  | "FRAUD_PROGRAM"
  | "COMPLAINTS_SUPPORT_AUDIT"
  | "WOLFSBERG_QUESTIONNAIRE"
  | "SECTION_313_FOREIGN_BANK_CERTIFICATE"
  | "CYBER_LIABILITY_INSURANCE"
  | "VCHECK_CONTENT_FORM"
  | "RESUME"
  | "501_C_3_NOTIF";

export type IPermissionCodes =
  | "NOT_KNOWN"
  | "UNUSUAL_ACTIVITY|COMPLIANCE_SUSPICIOUS"
  | "UNUSUAL_ACTIVITY|LEGAL_REQUEST"
  | "KYC_FRAUD|BLOCKED_LIST"
  | "KYC_FRAUD|FRAUDULENT_DOCS"
  | "BLOCKED_INDUSTRY"
  | "HIGH_RETURNS"
  | "NEGATIVE_BALANCE"
  | "PLATFORM_REQUEST"
  | "USER_REQUEST"
  | "DUPLICATE_ACCOUNT"
  | "UNUSUAL_ACTIVITY|COMPLIANCE_SUSPICIOUS"
  | "BLOCKED_INDUSTRY"
  | "PLATFORM_REQUEST"
  | "USER_REQUEST"
  | "PLATFORM_TERMINATED"
  | "NO_ACTIVITY"
  | "PERMANENT_CLOSURE";

export type IScreeningItemResponse =
  | "FAILED"
  | "PENDING"
  | "FALSE_POSITIVE"
  | "MATCH";

export type IBusinessEntityType =
  | "LP"
  | "LLC"
  | "ASSOCIATION"
  | "CORP"
  | "PARTNERSHIP"
  | "SOLE-PROPRIETORSHIP"
  | "TRUST"
  | "VENDOR"
  | "ESTATE"
  | "IRA";

export type IPersonalEntityType =
  | "M"
  | "F"
  | "O"
  | "NOT_KNOWN"
  | "TRUST"
  | "MINOR";

export type IEntityScope =
  | "Not Known"
  | "Airport"
  | "Arts & Entertainment"
  | "Automotive"
  | "Bank & Financial Services"
  | "Bar"
  | "Book Store"
  | "Business Services"
  | "Religious Organization"
  | "Club"
  | "Community/Government"
  | "Concert Venue"
  | "Doctor"
  | "Event Planning/Event Services"
  | "Food/Grocery"
  | "Health/Medical/Pharmacy"
  | "Home Improvement"
  | "Hospital/Clinic"
  | "Hotel"
  | "Landmark"
  | "Lawyer"
  | "Library"
  | "Licensed Financial Representative"
  | "Local Business"
  | "Middle School"
  | "Movie Theater"
  | "Museum/Art Gallery"
  | "Outdoor Gear/Sporting Goods"
  | "Pet Services"
  | "Professional Services"
  | "Public Places"
  | "Real Estate"
  | "Restaurant/Cafe"
  | "School"
  | "Shopping/Retail"
  | "Spas/Beauty/Personal Care"
  | "Sports Venue"
  | "Sports/Recreation/Activities"
  | "Tours/Sightseeing"
  | "Train Station"
  | "Transportation"
  | "University"
  | "Aerospace/Defense"
  | "Automobiles and Parts"
  | "Bank/Financial Institution"
  | "Biotechnology"
  | "Cause"
  | "Chemicals"
  | "Community Organization"
  | "Company"
  | "Computers/Technology"
  | "Consulting/Business Services"
  | "Education"
  | "Elementary School"
  | "Energy/Utility"
  | "Engineering/Construction"
  | "Farming/Agriculture"
  | "Food/Beverages"
  | "Government Organization"
  | "Health/Beauty"
  | "Health/Medical/Pharmaceuticals"
  | "Industrials"
  | "Insurance Company"
  | "Internet/Software"
  | "Legal/Law"
  | "Media/News/Publishing"
  | "Mining/Materials"
  | "Non-Governmental Organization (NGO)"
  | "Non-Profit Organization"
  | "Organization"
  | "Political Organization"
  | "Political Party"
  | "Preschool"
  | "Retail and Consumer Merchandise"
  | "Small Business"
  | "Telecommunication"
  | "Transport/Freight"
  | "Travel/Leisure";

interface IScreeningResponse {
  ofac_sdn?: IScreeningItemResponse;
  ofac_ssi_list?: IScreeningItemResponse;
  "ofac_ukraine-eo13662"?: IScreeningItemResponse;
  usa_csl_list?: IScreeningItemResponse;
  hm_treasury_sanctions?: IScreeningItemResponse;
  futures_sanctions?: IScreeningItemResponse;
  fincen_311_sanctions?: IScreeningItemResponse;
  mas_sanctions?: IScreeningItemResponse;
  ofac_fse_list?: IScreeningItemResponse;
  ofac_iran?: IScreeningItemResponse;
  usa_tel_list?: IScreeningItemResponse;
  "ofac_ns-plc"?: IScreeningItemResponse;
  ofac_sdgt?: IScreeningItemResponse;
  ofac_561_list?: IScreeningItemResponse;
  ofac_syria?: IScreeningItemResponse;
  "ofac_fse-sy"?: IScreeningItemResponse;
  osfi?: IScreeningItemResponse;
  fbi_counter_intelligence?: IScreeningItemResponse;
  fbi_domestic?: IScreeningItemResponse;
  fbi_cyber?: IScreeningItemResponse;
  fbi_white_collar?: IScreeningItemResponse;
  fbi_crimes_against_children?: IScreeningItemResponse;
  fbi_bank_robbers?: IScreeningItemResponse;
  fbi_wanted_terrorists?: IScreeningItemResponse;
  bis_dpl_sanctions?: IScreeningItemResponse;
  fbi_violent_crimes?: IScreeningItemResponse;
  fbi_domestic_terrorism?: IScreeningItemResponse;
  fbi_human_trafficking?: IScreeningItemResponse;
  fbi_criminal_enterprise_investigations?: IScreeningItemResponse;
  fbi_terrorism?: IScreeningItemResponse;
  fbi_murders?: IScreeningItemResponse;
  pep?: IScreeningItemResponse;
  aucl?: IScreeningItemResponse;
  eucl?: IScreeningItemResponse;
  uk_sanctions?: IScreeningItemResponse;
  switzerland_sanctions?: IScreeningItemResponse;
  dtc_list?: IScreeningItemResponse;
  cftc_sanctions?: IScreeningItemResponse;
  finra_sanctions?: IScreeningItemResponse;
  euro?: IScreeningItemResponse;
  fto_sanctions?: IScreeningItemResponse;
  hardcode_list?: IScreeningItemResponse;
  russian_sanctions?: IScreeningItemResponse;
  singapore_sanctions?: IScreeningItemResponse;
  nk_sanctions?: IScreeningItemResponse;
  cftc_reparations_sanctions?: IScreeningItemResponse;
  interpol?: IScreeningItemResponse;
  usa_rfj?: IScreeningItemResponse;
  belgian_list?: IScreeningItemResponse;
  canada_sema?: IScreeningItemResponse;
  canada_rcmp?: IScreeningItemResponse;
  cftc_red?: IScreeningItemResponse;
  ice_sanctions?: IScreeningItemResponse;
  unsc_cons?: IScreeningItemResponse;
  cons_sdn?: IScreeningItemResponse;
}
