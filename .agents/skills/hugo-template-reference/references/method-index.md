# Hugo method index



## duration

- `duration`: [Duration methods](https://gohugo.io/methods/duration/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `abs`: [Abs](https://gohugo.io/methods/duration/abs/) — Hugo Documentation
- `hours`: [Hours](https://gohugo.io/methods/duration/hours/) — Hugo Documentation
- `microseconds`: [Microseconds](https://gohugo.io/methods/duration/microseconds/) — Hugo Documentation
- `milliseconds`: [Milliseconds](https://gohugo.io/methods/duration/milliseconds/) — Hugo Documentation
- `minutes`: [Minutes](https://gohugo.io/methods/duration/minutes/) — Hugo Documentation
- `nanoseconds`: [Nanoseconds](https://gohugo.io/methods/duration/nanoseconds/) — Hugo Documentation
- `round`: [Round](https://gohugo.io/methods/duration/round/) — Hugo Documentation
- `seconds`: [Seconds](https://gohugo.io/methods/duration/seconds/) — Hugo Documentation
- `truncate`: [Truncate](https://gohugo.io/methods/duration/truncate/) — Hugo Documentation

## menu

- `menu`: [Menu methods](https://gohugo.io/methods/menu/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `byname`: [ByName](https://gohugo.io/methods/menu/byname/) — Returns the given menu with its entries sorted by name.
- `byweight`: [ByWeight](https://gohugo.io/methods/menu/byweight/) — Returns the given menu with its entries sorted by weight, then by name, then by identifier.
- `limit`: [Limit](https://gohugo.io/methods/menu/limit/) — Returns the given menu, limited to the first N entries.
- `reverse`: [Reverse](https://gohugo.io/methods/menu/reverse/) — Returns the given menu, reversing the sort order of its entries.

## menu-entry

- `menu-entry`: [Menu entry methods](https://gohugo.io/methods/menu-entry/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `children`: [Children](https://gohugo.io/methods/menu-entry/children/) — Returns a collection of child menu entries, if any, under the given menu entry.
- `haschildren`: [HasChildren](https://gohugo.io/methods/menu-entry/haschildren/) — Reports whether the given menu entry has child menu entries.
- `identifier`: [Identifier](https://gohugo.io/methods/menu-entry/identifier/) — Returns the `identifier` property of the given menu entry.
- `keyname`: [KeyName](https://gohugo.io/methods/menu-entry/keyname/) — Returns the `identifier` property of the given menu entry, falling back to its `name` property.
- `menu`: [Menu](https://gohugo.io/methods/menu-entry/menu/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `name`: [Name](https://gohugo.io/methods/menu-entry/name/) — Returns the `name` property of the given menu entry.
- `page`: [Page](https://gohugo.io/methods/menu-entry/page/) — Returns the Page object associated with the given menu entry.
- `pageref`: [PageRef](https://gohugo.io/methods/menu-entry/pageref/) — Returns the `pageRef` property of the given menu entry.
- `params`: [Params](https://gohugo.io/methods/menu-entry/params/) — Returns the `params` property of the given menu entry.
- `parent`: [Parent](https://gohugo.io/methods/menu-entry/parent/) — Returns the `parent` property of the given menu entry.
- `post`: [Post](https://gohugo.io/methods/menu-entry/post/) — Returns the `post` property of the given menu entry.
- `pre`: [Pre](https://gohugo.io/methods/menu-entry/pre/) — Returns the `pre` property of the given menu entry.
- `title`: [Title](https://gohugo.io/methods/menu-entry/title/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `url`: [URL](https://gohugo.io/methods/menu-entry/url/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `weight`: [Weight](https://gohugo.io/methods/menu-entry/weight/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)

## output-format

- `output-format`: [Output format methods](https://gohugo.io/methods/output-format/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `mediatype`: [MediaType](https://gohugo.io/methods/output-format/mediatype/) — Returns the media type of the given output format.
- `name`: [Name](https://gohugo.io/methods/output-format/name/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `permalink`: [Permalink](https://gohugo.io/methods/output-format/permalink/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `rel`: [Rel](https://gohugo.io/methods/output-format/rel/) — Returns the rel value of the given output format, either the default or as defined in your project configuration.
- `relpermalink`: [RelPermalink](https://gohugo.io/methods/output-format/relpermalink/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)

## overview

- `methods`: [Methods](https://gohugo.io/methods/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)

## page

- `page`: [Page methods](https://gohugo.io/methods/page/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `aliases`: [Aliases](https://gohugo.io/methods/page/aliases/) — Returns the aliases defined in front matter as server-relative URLs, resolved according to the current content dimension.
- `alltranslations`: [AllTranslations](https://gohugo.io/methods/page/alltranslations/) — Returns all translations of the given page, including the current language, sorted by language weight then language name.
- `alternativeoutputformats`: [AlternativeOutputFormats](https://gohugo.io/methods/page/alternativeoutputformats/) — Returns a slice of OutputFormat objects, excluding the current output format, each representing one of the output formats enabled for the given page.
- `ancestors`: [Ancestors](https://gohugo.io/methods/page/ancestors/) — Returns a collection of Page objects, one for each ancestor section of the given page.
- `bundletype`: [BundleType](https://gohugo.io/methods/page/bundletype/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `codeowners`: [CodeOwners](https://gohugo.io/methods/page/codeowners/) — Returns of slice of code owners for the given page, derived from the CODEOWNERS file in the root of the project directory.
- `content`: [Content](https://gohugo.io/methods/page/content/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `contentwithoutsummary`: [ContentWithoutSummary](https://gohugo.io/methods/page/contentwithoutsummary/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `currentsection`: [CurrentSection](https://gohugo.io/methods/page/currentsection/) — Returns the Page object of the section in which the given page resides.
- `data`: [Data](https://gohugo.io/methods/page/data/) — Returns a unique data object for each page kind.
- `date`: [Date](https://gohugo.io/methods/page/date/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `description`: [Description](https://gohugo.io/methods/page/description/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `draft`: [Draft](https://gohugo.io/methods/page/draft/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `eq`: [Eq](https://gohugo.io/methods/page/eq/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `expirydate`: [ExpiryDate](https://gohugo.io/methods/page/expirydate/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `file`: [File](https://gohugo.io/methods/page/file/) — For pages backed by a file, returns file information for the given page.
- `firstsection`: [FirstSection](https://gohugo.io/methods/page/firstsection/) — Returns the Page object of the top-level section of which the given page is a descendant.
- `fragments`: [Fragments](https://gohugo.io/methods/page/fragments/) — Returns a data structure of the fragments in the given page.
- `fuzzywordcount`: [FuzzyWordCount](https://gohugo.io/methods/page/fuzzywordcount/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `getpage`: [GetPage](https://gohugo.io/methods/page/getpage/) — Returns a Page object from the given path.
- `getterms`: [GetTerms](https://gohugo.io/methods/page/getterms/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `gitinfo`: [GitInfo](https://gohugo.io/methods/page/gitinfo/) — Provides access to commit metadata for a given page.
- `hasmenucurrent`: [HasMenuCurrent](https://gohugo.io/methods/page/hasmenucurrent/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `hasshortcode`: [HasShortcode](https://gohugo.io/methods/page/hasshortcode/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `headingsfiltered`: [HeadingsFiltered](https://gohugo.io/methods/page/headingsfiltered/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `insection`: [InSection](https://gohugo.io/methods/page/insection/) — Reports whether the given page is in the given section.
- `isancestor`: [IsAncestor](https://gohugo.io/methods/page/isancestor/) — Reports whether PAGE1 is an ancestor of PAGE2.
- `isbranch`: [IsBranch](https://gohugo.io/methods/page/isbranch/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `isdescendant`: [IsDescendant](https://gohugo.io/methods/page/isdescendant/) — Reports whether PAGE1 is a descendant of PAGE2.
- `ishome`: [IsHome](https://gohugo.io/methods/page/ishome/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `ismenucurrent`: [IsMenuCurrent](https://gohugo.io/methods/page/ismenucurrent/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `isnode`: [IsNode](https://gohugo.io/methods/page/isnode/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `ispage`: [IsPage](https://gohugo.io/methods/page/ispage/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `issection`: [IsSection](https://gohugo.io/methods/page/issection/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `istranslated`: [IsTranslated](https://gohugo.io/methods/page/istranslated/) — Reports whether the given page has one or more translations.
- `keywords`: [Keywords](https://gohugo.io/methods/page/keywords/) — Returns a slice of keywords as defined in front matter.
- `kind`: [Kind](https://gohugo.io/methods/page/kind/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `language`: [Language](https://gohugo.io/methods/page/language/) — Returns the Language object for the given page.
- `lastmod`: [Lastmod](https://gohugo.io/methods/page/lastmod/) — Returns the last modification date of the given page.
- `layout`: [Layout](https://gohugo.io/methods/page/layout/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `len`: [Len](https://gohugo.io/methods/page/len/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `linktitle`: [LinkTitle](https://gohugo.io/methods/page/linktitle/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `next`: [Next](https://gohugo.io/methods/page/next/) — Returns the next page in a site’s collection of regular pages, relative to the current page.
- `nextinsection`: [NextInSection](https://gohugo.io/methods/page/nextinsection/) — Returns the next regular page in a section, relative to the given page.
- `outputformats`: [OutputFormats](https://gohugo.io/methods/page/outputformats/) — Returns a slice of OutputFormat objects, each representing one of the output formats enabled for the given page.
- `page`: [Page](https://gohugo.io/methods/page/page/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `pages`: [Pages](https://gohugo.io/methods/page/pages/) — Returns a collection of regular pages within the current section, and section pages of immediate descendant sections.
- `paginate`: [Paginate](https://gohugo.io/methods/page/paginate/) — Paginates a collection of pages.
- `paginator`: [Paginator](https://gohugo.io/methods/page/paginator/) — Paginates the collection of regular pages received in context.
- `param`: [Param](https://gohugo.io/methods/page/param/) — Returns a page parameter with the given key, falling back to a site parameter if present.
- `params`: [Params](https://gohugo.io/methods/page/params/) — Returns a map of custom parameters as defined in the front matter of the given page.
- `parent`: [Parent](https://gohugo.io/methods/page/parent/) — Returns the Page object of the parent section of the given page.
- `path`: [Path](https://gohugo.io/methods/page/path/) — Returns the logical path of the given page.
- `permalink`: [Permalink](https://gohugo.io/methods/page/permalink/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `plain`: [Plain](https://gohugo.io/methods/page/plain/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `plainwords`: [PlainWords](https://gohugo.io/methods/page/plainwords/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `prev`: [Prev](https://gohugo.io/methods/page/prev/) — Returns the previous page in a site’s collection of regular pages, relative to the current page.
- `previnsection`: [PrevInSection](https://gohugo.io/methods/page/previnsection/) — Returns the previous regular page in a section, relative to the given page.
- `publishdate`: [PublishDate](https://gohugo.io/methods/page/publishdate/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `rawcontent`: [RawContent](https://gohugo.io/methods/page/rawcontent/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `readingtime`: [ReadingTime](https://gohugo.io/methods/page/readingtime/) — Returns the estimated reading time, in minutes, for the given page.
- `ref`: [Ref](https://gohugo.io/methods/page/ref/) — Returns the absolute URL of the page with the given path, language, and output format.
- `regularpages`: [RegularPages](https://gohugo.io/methods/page/regularpages/) — Returns a collection of regular pages within the current section.
- `regularpagesrecursive`: [RegularPagesRecursive](https://gohugo.io/methods/page/regularpagesrecursive/) — Returns a collection of regular pages within the current section, and regular pages within all descendant sections.
- `relpermalink`: [RelPermalink](https://gohugo.io/methods/page/relpermalink/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `relref`: [RelRef](https://gohugo.io/methods/page/relref/) — Returns the relative URL of the page with the given path, language, and output format.
- `render`: [Render](https://gohugo.io/methods/page/render/) — Renders the given template with the given page as context.
- `rendershortcodes`: [RenderShortcodes](https://gohugo.io/methods/page/rendershortcodes/) — Renders all shortcodes in the content of the given page, preserving the surrounding markup.
- `renderstring`: [RenderString](https://gohugo.io/methods/page/renderstring/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `resources`: [Resources](https://gohugo.io/methods/page/resources/) — Returns a collection of page resources.
- `rotate`: [Rotate](https://gohugo.io/methods/page/rotate/) — Returns a collection of pages that vary along the specified dimension while sharing the current page’s values for the other dimensions, including the current page, sorted by the dimension’s default sort order.
- `scratch`: [Scratch](https://gohugo.io/methods/page/scratch/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `section`: [Section](https://gohugo.io/methods/page/section/) — Returns the name of the top-level section in which the given page resides.
- `sections`: [Sections](https://gohugo.io/methods/page/sections/) — Returns a collection of section pages, one for each immediate descendant section of the given page.
- `site`: [Site](https://gohugo.io/methods/page/site/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `sitemap`: [Sitemap](https://gohugo.io/methods/page/sitemap/) — Returns the sitemap settings for the given page as defined in front matter, falling back to the sitemap settings as defined in your project configuration.
- `sites`: [Sites](https://gohugo.io/methods/page/sites/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `slug`: [Slug](https://gohugo.io/methods/page/slug/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `store`: [Store](https://gohugo.io/methods/page/store/) — Returns a persistent data structure for storing and manipulating keyed values, scoped to the current page.
- `summary`: [Summary](https://gohugo.io/methods/page/summary/) — Returns the summary of the given page.
- `tableofcontents`: [TableOfContents](https://gohugo.io/methods/page/tableofcontents/) — Returns a table of contents for the given page.
- `title`: [Title](https://gohugo.io/methods/page/title/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `translationkey`: [TranslationKey](https://gohugo.io/methods/page/translationkey/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `translations`: [Translations](https://gohugo.io/methods/page/translations/) — Returns all translations of the given page, excluding the current language, sorted by language weight then language name.
- `truncated`: [Truncated](https://gohugo.io/methods/page/truncated/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `type`: [Type](https://gohugo.io/methods/page/type/) — Returns the content type of the given page.
- `weight`: [Weight](https://gohugo.io/methods/page/weight/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `wordcount`: [WordCount](https://gohugo.io/methods/page/wordcount/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)

## pager

- `pager`: [Pager methods](https://gohugo.io/methods/pager/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `first`: [First](https://gohugo.io/methods/pager/first/) — Returns the first pager in the pager collection.
- `hasnext`: [HasNext](https://gohugo.io/methods/pager/hasnext/) — Reports whether there is a pager after the current pager.
- `hasprev`: [HasPrev](https://gohugo.io/methods/pager/hasprev/) — Reports whether there is a pager before the current pager.
- `last`: [Last](https://gohugo.io/methods/pager/last/) — Returns the last pager in the pager collection.
- `next`: [Next](https://gohugo.io/methods/pager/next/) — Returns the next pager in the pager collection.
- `numberofelements`: [NumberOfElements](https://gohugo.io/methods/pager/numberofelements/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `pagegroups`: [PageGroups](https://gohugo.io/methods/pager/pagegroups/) — Returns the page groups in the current pager.
- `pagenumber`: [PageNumber](https://gohugo.io/methods/pager/pagenumber/) — Returns the current pager’s number within the pager collection.
- `pagers`: [Pagers](https://gohugo.io/methods/pager/pagers/) — Returns the pagers collection.
- `pagersize`: [PagerSize](https://gohugo.io/methods/pager/pagersize/) — Returns the number of pages per pager.
- `pages`: [Pages](https://gohugo.io/methods/pager/pages/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `prev`: [Prev](https://gohugo.io/methods/pager/prev/) — Returns the previous pager in the pager collection.
- `totalnumberofelements`: [TotalNumberOfElements](https://gohugo.io/methods/pager/totalnumberofelements/) — Hugo Documentation
- `totalpages`: [TotalPages](https://gohugo.io/methods/pager/totalpages/) — Returns the number of pagers in the pager collection.
- `url`: [URL](https://gohugo.io/methods/pager/url/) — Returns the URL of the current pager relative to the site root.

## pages

- `pages`: [Pages methods](https://gohugo.io/methods/pages/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `bydate`: [ByDate](https://gohugo.io/methods/pages/bydate/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `byexpirydate`: [ByExpiryDate](https://gohugo.io/methods/pages/byexpirydate/) — Returns the given page collection sorted by expiration date in ascending order.
- `bylanguage`: [ByLanguage](https://gohugo.io/methods/pages/bylanguage/) — Returns the given page collection sorted by language.
- `bylastmod`: [ByLastmod](https://gohugo.io/methods/pages/bylastmod/) — Returns the given page collection sorted by last modification date in ascending order.
- `bylength`: [ByLength](https://gohugo.io/methods/pages/bylength/) — Hugo Documentation
- `bylinktitle`: [ByLinkTitle](https://gohugo.io/methods/pages/bylinktitle/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `byparam`: [ByParam](https://gohugo.io/methods/pages/byparam/) — Returns the given page collection sorted by the given parameter in ascending order.
- `bypublishdate`: [ByPublishDate](https://gohugo.io/methods/pages/bypublishdate/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `bytitle`: [ByTitle](https://gohugo.io/methods/pages/bytitle/) — Hugo Documentation
- `byweight`: [ByWeight](https://gohugo.io/methods/pages/byweight/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `groupby`: [GroupBy](https://gohugo.io/methods/pages/groupby/) — Returns the given page collection grouped by the given field in ascending order.
- `groupbydate`: [GroupByDate](https://gohugo.io/methods/pages/groupbydate/) — Returns the given page collection grouped by date in descending order.
- `groupbyexpirydate`: [GroupByExpiryDate](https://gohugo.io/methods/pages/groupbyexpirydate/) — Returns the given page collection grouped by expiration date in descending order.
- `groupbylastmod`: [GroupByLastmod](https://gohugo.io/methods/pages/groupbylastmod/) — Returns the given page collection grouped by last modification date in descending order.
- `groupbyparam`: [GroupByParam](https://gohugo.io/methods/pages/groupbyparam/) — Returns the given page collection grouped by the given parameter in ascending order.
- `groupbyparamdate`: [GroupByParamDate](https://gohugo.io/methods/pages/groupbyparamdate/) — Returns the given page collection grouped by the given date parameter in descending order.
- `groupbypublishdate`: [GroupByPublishDate](https://gohugo.io/methods/pages/groupbypublishdate/) — Returns the given page collection grouped by publish date in descending order.
- `len`: [Len](https://gohugo.io/methods/pages/len/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `limit`: [Limit](https://gohugo.io/methods/pages/limit/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `next`: [Next](https://gohugo.io/methods/pages/next/) — Returns the next page in a page collection, relative to the given page.
- `prev`: [Prev](https://gohugo.io/methods/pages/prev/) — Returns the previous page in a page collection, relative to the given page.
- `related`: [Related](https://gohugo.io/methods/pages/related/) — Returns a collection of pages related to the given page.
- `reverse`: [Reverse](https://gohugo.io/methods/pages/reverse/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)

## resource

- `resource`: [Resource methods](https://gohugo.io/methods/resource/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `colors`: [Colors](https://gohugo.io/methods/resource/colors/) — HUGO News Docs Themes Community GitHub Built with Hugo v0.163.0
- `content`: [Content](https://gohugo.io/methods/resource/content/) — Returns the content of the given resource.
- `crop`: [Crop](https://gohugo.io/methods/resource/crop/) — Applicable to images, returns a new image resource cropped according to the given processing specification.
- `data`: [Data](https://gohugo.io/methods/resource/data/) — Applicable to resources returned by the resources.GetRemote function, returns information from the HTTP response.
- `err`: [Err](https://gohugo.io/methods/resource/err/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `exif`: [Exif](https://gohugo.io/methods/resource/exif/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `fill`: [Fill](https://gohugo.io/methods/resource/fill/) — Applicable to images, returns a new image resource cropped and resized according to the given processing specification.
- `filter`: [Filter](https://gohugo.io/methods/resource/filter/) — Applicable to images, applies one or more image filters to the given image resource.
- `fit`: [Fit](https://gohugo.io/methods/resource/fit/) — Applicable to images, returns a new image resource downscaled to fit according to the given processing specification.
- `height`: [Height](https://gohugo.io/methods/resource/height/) — Applicable to images, returns the height of the given resource.
- `mediatype`: [MediaType](https://gohugo.io/methods/resource/mediatype/) — Returns a media type object for the given resource.
- `meta`: [Meta](https://gohugo.io/methods/resource/meta/) — Applicable to images, returns an object containing Exif, IPTC, and XMP metadata for supported image formats.
- `name`: [Name](https://gohugo.io/methods/resource/name/) — Returns the name of the given resource as optionally defined in front matter, falling back to its file path.
- `params`: [Params](https://gohugo.io/methods/resource/params/) — Returns a map of resource parameters as defined in front matter.
- `permalink`: [Permalink](https://gohugo.io/methods/resource/permalink/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `process`: [Process](https://gohugo.io/methods/resource/process/) — Applicable to images, returns a new image resource processed according to the given processing specification.
- `publish`: [Publish](https://gohugo.io/methods/resource/publish/) — Publishes the given resource.
- `relpermalink`: [RelPermalink](https://gohugo.io/methods/resource/relpermalink/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `resize`: [Resize](https://gohugo.io/methods/resource/resize/) — Applicable to images, returns a new image resource resized according to the given processing specification.
- `resourcetype`: [ResourceType](https://gohugo.io/methods/resource/resourcetype/) — Returns the main type of the given resource’s media type.
- `title`: [Title](https://gohugo.io/methods/resource/title/) — Returns the title of the given resource as optionally defined in front matter, falling back to a relative path or hashed file name depending on resource type.
- `width`: [Width](https://gohugo.io/methods/resource/width/) — Applicable to images, returns the width of the given resource.

## shortcode

- `shortcode`: [Shortcode methods](https://gohugo.io/methods/shortcode/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `get`: [Get](https://gohugo.io/methods/shortcode/get/) — Returns the value of the given argument.
- `inner`: [Inner](https://gohugo.io/methods/shortcode/inner/) — Returns the content between opening and closing shortcode tags, applicable when the shortcode call includes a closing tag.
- `innerdeindent`: [InnerDeindent](https://gohugo.io/methods/shortcode/innerdeindent/) — Returns the content between opening and closing shortcode tags, with indentation removed, applicable when the shortcode call includes a closing tag.
- `isnamedparams`: [IsNamedParams](https://gohugo.io/methods/shortcode/isnamedparams/) — Reports whether the shortcode call uses named arguments.
- `name`: [Name](https://gohugo.io/methods/shortcode/name/) — Returns the shortcode file name, excluding the file extension.
- `ordinal`: [Ordinal](https://gohugo.io/methods/shortcode/ordinal/) — Returns the zero-based ordinal of the shortcode in relation to its parent.
- `page`: [Page](https://gohugo.io/methods/shortcode/page/) — Returns the Page object from which the shortcode was called.
- `params`: [Params](https://gohugo.io/methods/shortcode/params/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `parent`: [Parent](https://gohugo.io/methods/shortcode/parent/) — Returns the parent shortcode context in nested shortcodes.
- `position`: [Position](https://gohugo.io/methods/shortcode/position/) — Returns the file name and position from which the shortcode was called.
- `ref`: [Ref](https://gohugo.io/methods/shortcode/ref/) — Returns the absolute URL of the page with the given path, language, and output format.
- `relref`: [RelRef](https://gohugo.io/methods/shortcode/relref/) — Returns the relative URL of the page with the given path, language, and output format.
- `scratch`: [Scratch](https://gohugo.io/methods/shortcode/scratch/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `site`: [Site](https://gohugo.io/methods/shortcode/site/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `store`: [Store](https://gohugo.io/methods/shortcode/store/) — Returns a persistent data structure for storing and manipulating keyed values, scoped to the current shortcode.

## site

- `site`: [Site methods](https://gohugo.io/methods/site/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `allpages`: [AllPages](https://gohugo.io/methods/site/allpages/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `baseurl`: [BaseURL](https://gohugo.io/methods/site/baseurl/) — Returns the base URL as defined in your project configuration.
- `builddrafts`: [BuildDrafts](https://gohugo.io/methods/site/builddrafts/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `config`: [Config](https://gohugo.io/methods/site/config/) — Returns a subset of your project configuration.
- `copyright`: [Copyright](https://gohugo.io/methods/site/copyright/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `data`: [Data](https://gohugo.io/methods/site/data/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `dimension`: [Dimension](https://gohugo.io/methods/site/dimension/) — Returns the dimension object for the given dimension for the given site.
- `getpage`: [GetPage](https://gohugo.io/methods/site/getpage/) — Returns a Page object from the given path.
- `home`: [Home](https://gohugo.io/methods/site/home/) — Returns the home Page object for the given site.
- `isdefault`: [IsDefault](https://gohugo.io/methods/site/isdefault/) — Reports whether the given site is the default site across all dimensions.
- `language`: [Language](https://gohugo.io/methods/site/language/) — Returns the Language object for the given site.
- `languageprefix`: [LanguagePrefix](https://gohugo.io/methods/site/languageprefix/) — Returns the URL language prefix, if any, for the given site.
- `languages`: [Languages](https://gohugo.io/methods/site/languages/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `lastmod`: [Lastmod](https://gohugo.io/methods/site/lastmod/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `mainsections`: [MainSections](https://gohugo.io/methods/site/mainsections/) — Returns a slice of the main section names as defined in your project configuration, falling back to the top-level section with the most pages.
- `menus`: [Menus](https://gohugo.io/methods/site/menus/) — Returns a collection of menu objects for the given site.
- `pages`: [Pages](https://gohugo.io/methods/site/pages/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `param`: [Param](https://gohugo.io/methods/site/param/) — Returns the site parameter with the given key.
- `params`: [Params](https://gohugo.io/methods/site/params/) — Returns a map of custom parameters as defined in your project configuration.
- `regularpages`: [RegularPages](https://gohugo.io/methods/site/regularpages/) — Returns a collection of all regular pages.
- `role`: [Role](https://gohugo.io/methods/site/role/) — Returns the Role object for the given site.
- `sections`: [Sections](https://gohugo.io/methods/site/sections/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `sites`: [Sites](https://gohugo.io/methods/site/sites/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `store`: [Store](https://gohugo.io/methods/site/store/) — Returns a persistent data structure for storing and manipulating keyed values, scoped to the current site.
- `taxonomies`: [Taxonomies](https://gohugo.io/methods/site/taxonomies/) — Returns a data structure containing the site’s Taxonomy objects, the terms within each Taxonomy object, and the pages to which the terms are assigned.
- `title`: [Title](https://gohugo.io/methods/site/title/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `version`: [Version](https://gohugo.io/methods/site/version/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)

## taxonomy

- `taxonomy`: [Taxonomy methods](https://gohugo.io/methods/taxonomy/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `alphabetical`: [Alphabetical](https://gohugo.io/methods/taxonomy/alphabetical/) — Returns an ordered taxonomy, sorted alphabetically by term.
- `bycount`: [ByCount](https://gohugo.io/methods/taxonomy/bycount/) — Returns an ordered taxonomy, sorted by the number of pages associated with each term.
- `count`: [Count](https://gohugo.io/methods/taxonomy/count/) — Returns the number of number of weighted pages to which the given term has been assigned.
- `get`: [Get](https://gohugo.io/methods/taxonomy/get/) — Returns a slice of weighted pages to which the given term has been assigned.
- `page`: [Page](https://gohugo.io/methods/taxonomy/page/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)

## time

- `time`: [Time methods](https://gohugo.io/methods/time/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `add`: [Add](https://gohugo.io/methods/time/add/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `adddate`: [AddDate](https://gohugo.io/methods/time/adddate/) — Returns the time corresponding to adding the given number of years, months, and days to the given time.Time value.
- `after`: [After](https://gohugo.io/methods/time/after/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `before`: [Before](https://gohugo.io/methods/time/before/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `day`: [Day](https://gohugo.io/methods/time/day/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `equal`: [Equal](https://gohugo.io/methods/time/equal/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `format`: [Format](https://gohugo.io/methods/time/format/) — Returns a textual representation of the time.Time value formatted according to the layout string.
- `hour`: [Hour](https://gohugo.io/methods/time/hour/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `isdst`: [IsDST](https://gohugo.io/methods/time/isdst/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `iszero`: [IsZero](https://gohugo.io/methods/time/iszero/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `local`: [Local](https://gohugo.io/methods/time/local/) — Hugo Documentation
- `minute`: [Minute](https://gohugo.io/methods/time/minute/) — Hugo Documentation
- `month`: [Month](https://gohugo.io/methods/time/month/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `nanosecond`: [Nanosecond](https://gohugo.io/methods/time/nanosecond/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `round`: [Round](https://gohugo.io/methods/time/round/) — Returns the result of rounding TIME to the nearest multiple of DURATION since January 1, 0001, 00:00:00 UTC.
- `second`: [Second](https://gohugo.io/methods/time/second/) — Hugo Documentation
- `sub`: [Sub](https://gohugo.io/methods/time/sub/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `truncate`: [Truncate](https://gohugo.io/methods/time/truncate/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `unix`: [Unix](https://gohugo.io/methods/time/unix/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `unixmicro`: [UnixMicro](https://gohugo.io/methods/time/unixmicro/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `unixmilli`: [UnixMilli](https://gohugo.io/methods/time/unixmilli/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `unixnano`: [UnixNano](https://gohugo.io/methods/time/unixnano/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `utc`: [UTC](https://gohugo.io/methods/time/utc/) — Hugo Documentation
- `weekday`: [Weekday](https://gohugo.io/methods/time/weekday/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `year`: [Year](https://gohugo.io/methods/time/year/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
- `yearday`: [YearDay](https://gohugo.io/methods/time/yearday/) — Built with Hugo [v0.163.0](https://github.com/gohugoio/hugo/releases/tag/v0.163.0)
