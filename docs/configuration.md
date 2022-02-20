# Configuration

This page shows how to configure the extension and details about the extension settings

## `google-inserter.format`

This can be used to specify a custom format for the inserted content. See [formatting](./formatting) for more information.

**Type**: <span style="color:#50fa7b">string</span><br>
**Default**: <span style="color:#ff5555">null</span><br>
**Note**: <span style="color:#ffb86c">This can be overridden per langauge</span>

## `google-inserter.safe_search`

This should be used to enable or disable the google safe search feature. See [safe search](https://support.google.com/websearch/answer/510) for more information

**Type**: <span style="color:#ff79c6">boolean</span><br>
**Default**: <span style="color:#50fa7b">true</span><br>
**Note**: <span style="color:#ffb86c">Disabling this may show explicit (18+) results</span>

## `google-inserter.search_language`

This should be used to only retrieve results for websites that are available in that given language

**Type**: <span style="color:#50fa7b">string</span><br>
**Format**: <span style="color:#8be9fd">[ISO-691-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)</span><br>
**Default**: <span style="color:#bd93f9">en</span><br>
**Note**: <span style="color:#ffb86c">You might see different results to your search depending on the value of the value of this setting. </span>

??? note "Supported languages"
    |Code|Description
    |------|--------------------------------------------|
    |ar    |Arabic                                      |
    |be    |Belarusian                                  |
    |bg    |Bulgarian                                   |
    |ca    |Catalan                                     |
    |cs    |Czech                                       |
    |da    |Danish                                      |
    |de    |German                                      |
    |el    |Greek                                       |
    |en    |English                                     |
    |eo    |Esperanto                                   |
    |es    |Spanish                                     |
    |et    |Estonian                                    |
    |fa    |Persian                                     |
    |fi    |Finnish                                     |
    |fr    |French                                      |
    |hr    |Croatian                                    |
    |hu    |Hungarian                                   |
    |hy    |Armenian                                    |
    |id    |Indonesian                                  |
    |is    |Icelandic                                   |
    |it    |Italian                                     |
    |iw    |Hebrew                                      |
    |ja    |Japanese                                    |
    |ko    |Korean                                      |
    |lt    |Lithuanian                                  |
    |lv    |Latvian                                     |
    |nl    |Dutch                                       |
    |no    |Norwegian                                   |
    |pl    |Polish                                      |
    |pt    |Portuguese                                  |
    |ro    |Romanian                                    |
    |ru    |Russian                                     |
    |sk    |Slovak                                      |
    |sl    |Slovenian                                   |
    |sr    |Serbian                                     |
    |sv    |Swedish                                     |
    |th    |Thai                                        |
    |tl    |Filipino                                    |
    |tr    |Turkish                                     |
    |uk    |Ukrainian                                   |
    |vi    |Vietnamese                                  |
    |zh-CN |Chinese Simplified                          |
    |zh-TW |Chinese Traditional                         |


## `google-inserter.display_language`

This should be used to change the display language of the search results. Like the title and description

**Type**: <span style="color:#50fa7b">string</span><br>
**Format**: <span style="color:#8be9fd">[ISO-691-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes "ISO 639 is a standardized nomenclature used to classify languages. Each language is assigned a two-letter (639-1) and three-letter (639-2 and 639-3) lowercase abbreviation, amended in later versions of the nomenclature.")</span><br>
**Default**: <span style="color:#bd93f9">en</span><br>
**Note**: <span style="color:#ffb86c">You might see different language in your search results depending on the value of this setting. </span>

??? note "Supported languages"
    |Code|Description
    |------|--------------------------------------------|
    |ar    |Arabic                                      |
    |be    |Belarusian                                  |
    |bg    |Bulgarian                                   |
    |ca    |Catalan                                     |
    |cs    |Czech                                       |
    |da    |Danish                                      |
    |de    |German                                      |
    |el    |Greek                                       |
    |en    |English                                     |
    |eo    |Esperanto                                   |
    |es    |Spanish                                     |
    |et    |Estonian                                    |
    |fa    |Persian                                     |
    |fi    |Finnish                                     |
    |fr    |French                                      |
    |hr    |Croatian                                    |
    |hu    |Hungarian                                   |
    |hy    |Armenian                                    |
    |id    |Indonesian                                  |
    |is    |Icelandic                                   |
    |it    |Italian                                     |
    |iw    |Hebrew                                      |
    |ja    |Japanese                                    |
    |ko    |Korean                                      |
    |lt    |Lithuanian                                  |
    |lv    |Latvian                                     |
    |nl    |Dutch                                       |
    |no    |Norwegian                                   |
    |pl    |Polish                                      |
    |pt    |Portuguese                                  |
    |ro    |Romanian                                    |
    |ru    |Russian                                     |
    |sk    |Slovak                                      |
    |sl    |Slovenian                                   |
    |sr    |Serbian                                     |
    |sv    |Swedish                                     |
    |th    |Thai                                        |
    |tl    |Filipino                                    |
    |tr    |Turkish                                     |
    |uk    |Ukrainian                                   |
    |vi    |Vietnamese                                  |
    |zh-CN |Chinese Simplified                          |
    |zh-TW |Chinese Traditional                         |


## `google-inserter.search_country`

This should be used to limit the search results to pages/sites from certain locations.

**Type**: <span style="color:#50fa7b">string</span><br>
**Default**: <span style="color:#ff5555">null</span><br>
**Format**: <span style="color:#8be9fd">[ISO-3166](https://en.wikipedia.org/wiki/ISO_3166 "ISO 3166 is a standard published by the International Organization for Standardization \(ISO\) that defines codes for the names of countries, dependent territories, special areas of geographical interest, and their principal subdivisions \(e.g., provinces or states\). The official name of the standard is Codes for the representation of names of countries and their subdivisions.")</span><br>
**Note**: <span style="color:#ffb86c">You might see different results to your search depending on the value of this setting. </span>

??? note "Supported locations"

    | Code | Description |
    |------|--------------
    |    AD|Andorra
    |    AE|United Arab Emirates
    |    AF|Afghanistan
    |    AG|Antigua and Barbuda
    |    AI|Anguilla
    |    AL|Albania
    |    AM|Armenia
    |    AN|Netherlands Antilles
    |    AO|Angola
    |    AQ|Antarctica
    |    AR|Argentina
    |    AS|American Samoa
    |    AT|Austria
    |    AU|Australia
    |    AW|Aruba
    |    AZ|Azerbaijan
    |    BA|Bosnia and Herzegovina
    |    BB|Barbados
    |    BD|Bangladesh
    |    BE|Belgium
    |    BF|Burkina Faso
    |    BG|Bulgaria
    |    BH|Bahrain
    |    BI|Burundi
    |    BJ|Benin
    |    BM|Bermuda
    |    BN|Brunei Darussalam
    |    BO|Bolivia
    |    BR|Brazil
    |    BS|Bahamas
    |    BT|Bhutan
    |    BV|Bouvet Island
    |    BW|Botswana
    |    BY|Belarus
    |    BZ|Belize
    |    CA|Canada
    |    CC|Cocos (Keeling) Islands
    |    CD|Congo, Democratic Republic
    |    CF|Central African Republic
    |    CG|Congo
    |    CH|Switzerland
    |    CI|Cote d'Ivoire
    |    CK|Cook Islands
    |    CL|Chile
    |    CM|Cameroon
    |    CN|China
    |    CO|Colombia
    |    CR|Costa Rica
    |    CS|Serbia and Montenegro
    |    CV|Cape Verde
    |    CX|Christmas Island
    |    CY|Cyprus
    |    CZ|Czech Republic
    |    DE|Germany
    |    DJ|Djibouti
    |    DK|Denmark
    |    DM|Dominica
    |    DO|Dominican Republic
    |    DZ|Algeria
    |    EC|Ecuador
    |    EE|Estonia
    |    EG|Egypt
    |    EH|Western Sahara
    |    ER|Eritrea
    |    ES|Spain
    |    ET|Ethiopia
    |    FI|Finland
    |    FJ|Fiji
    |    FK|Falkland Islands (Malvinas)
    |    FM|Micronesia
    |    FO|Faroe Islands
    |    FR|France
    |    GA|Gabon
    |    GB|United Kingdom
    |    GD|Grenada
    |    GE|Georgia
    |    GF|French Guiana
    |    GH|Ghana
    |    GI|Gibraltar
    |    GL|Greenland
    |    GM|Gambia
    |    GN|Guinea
    |    GP|Guadeloupe
    |    GQ|Equatorial Guinea
    |    GR|Greece
    |    GS|South Georgia and The South Sandwich Islands
    |    GT|Guatemala
    |    GU|Guam
    |    GW|Guinea-Bissau
    |    GY|Guyana
    |    HK|Hong Kong
    |    HM|Heard and McDonald Islands
    |    HN|Honduras
    |    HR|Croatia
    |    HT|Haiti
    |    HU|Hungary
    |    ID|Indonesia
    |    IE|Ireland
    |    IL|Israel
    |    IN|India
    |    IO|British Indian Ocean Territory
    |    IQ|Iraq
    |    IS|Iceland
    |    IT|Italy
    |    JM|Jamaica
    |    JO|Jordan
    |    JP|Japan
    |    KE|Kenya
    |    KG|Kyrgyzstan
    |    KH|Cambodia
    |    KI|Kiribati
    |    KM|Comoros
    |    KN|Saint Kitts and Nevis
    |    KR|South Korea
    |    KW|Kuwait
    |    KY|Cayman Islands
    |    KZ|Kazakhstan
    |    LA|Lao People's Democratic Republic
    |    LB|Lebanon
    |    LC|Saint Lucia
    |    LI|Liechtenstein
    |    LK|Sri Lanka
    |    LR|Liberia
    |    LS|Lesotho
    |    LT|Lithuania
    |    LU|Luxembourg
    |    LV|Latvia
    |    LY|Libya
    |    MA|Morocco
    |    MC|Monaco
    |    MD|Moldova
    |    MG|Madagascar
    |    MH|Marshall Islands
    |    MK|Macedonia
    |    ML|Mali
    |    MN|Mongolia
    |    MO|Macau
    |    MP|Northern Maria
    |    MQ|Martinique
    |    MR|Mauritania
    |    MS|Montserrat
    |    MT|Malta
    |    MU|Mauritius
    |    MV|Maldives
    |    MW|Malawi
    |    MX|Mexico
    |    MY|Malaysia
    |    MZ|Mozambique
    |    NA|Namibia
    |    NC|New Caledonia
    |    NE|Niger
    |    NF|Norfolk Island
    |    NG|Nigeria
    |    NI|Nicaragua
    |    NL|Netherlands
    |    NO|Norway
    |    NP|Nepal
    |    NR|Nauru
    |    NU|Niue
    |    NZ|New Zealand
    |    OM|Oman
    |    PA|Panama
    |    PE|Peru
    |    PF|French Polynesia
    |    PG|Papua New Guinea
    |    PH|Philippines
    |    PK|Pakistan
    |    PL|Poland
    |    PM|St. Pierre and Miquelon
    |    PN|Pitcairn
    |    PR|Puerto Rico
    |    PS|Palestinian Territory
    |    PT|Portugal
    |    PW|Palau
    |    PY|Paraguay
    |    QA|Qatar
    |    RE|Reunion
    |    RO|Romania
    |    RU|Russian Federation
    |    RW|Rwanda
    |    SA|Saudi Arabia
    |    SB|Solomon Islands
    |    SC|Seychelles
    |    SE|Sweden
    |    SG|Singapore
    |    SH|St. Helena
    |    SI|Slovenia
    |    SJ|Svalbard and Jan Mayen Islands
    |    SK|Slovakia
    |    SL|Sierra Leone
    |    SM|San Marino
    |    SN|Senegal
    |    SO|Somalia
    |    SR|Suriname
    |    ST|Sao Tome and Principe
    |    SV|El Salvador
    |    SZ|Swaziland
    |    TC|Turks and Caicos Islands
    |    TD|Chad
    |    TF|French Southern Territories
    |    TG|Togo
    |    TH|Thailand
    |    TJ|Tajikistan
    |    TK|Tokelau
    |    TL|East Timor
    |    TM|Turkmenistan
    |    TN|Tunisia
    |    TO|Tonga
    |    TR|Turkey
    |    TT|Trinidad and Tobago
    |    TV|Tuvalu
    |    TW|Taiwan
    |    TZ|Tanzania
    |    UA|Ukraine
    |    UG|Uganda
    |    UM|United States Minor Outlying Islands
    |    US|United States
    |    UY|Uruguay
    |    UZ|Uzbekistan
    |    VA|Vatican
    |    VC|Saint Vincent and the Grenadines
    |    VE|Venezuela
    |    VG|Virgin Islands (British)
    |    VI|Virgin Islands (U.S.)
    |    VN|Viet Nam
    |    VU|Vanuatu
    |    WF|Wallis and Futuna Islands
    |    WS|Samoa
    |    YE|Yemen
    |    YT|Mayotte
    |    ZA|South Africa
    |    ZM|Zambia
    |    ZW|Zimbabwe

## `google-inserter.api_response_fields`

The API response will only contain these fields. Useful for speed and to omit redundant data. For syntax see [syntax](https://developers.google.com/custom-search/v1/performance#fields-syntax)

**Type**: <span style="color:#50fa7b">string</span><br>
**Default**: <span style="color:#ff5555">null</span><br>
**Note**: <span style="color:#ffb86c">You might see a speed boost if this parameter is set with small info</span>
