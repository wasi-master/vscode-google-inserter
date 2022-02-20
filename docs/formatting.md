# Formatting

The extensions supports different formatting options for different languages. For example the syntax for creating a hyperlink in html is different from doing the same thing in markdown.

The formatting syntax if the same as the [lodash.template](https://lodash.com/docs/4.17.15#template) syntax.

In short, you can use `${}` to interpolate variables and you can use a dot (`.`) to access nested values just like javascript.<br>
For example `[${selectedText}](${link} \"${title}\")` will be the markdown link syntax for showing the currently selected text in vscode with a hyperlink to the selected search result and the hover text would be the page title

## Elements

There are a lot of different things you can use in your templates. The main ones are given below

Name | Description
---------|----------
 **`title`** | The title of the search result
 **`htmlTitle`** | The title of the search result in html format<br>
 **`selectedText`** | The currently selected text inside vscode, can be empty
 **`link`** | The full url to the search result<br>
 **`displayLink`** | The shortened version for the link for the search result. This is usually just the domain name<br>
 **`snippet`** | The description of the search result as seen on google<br>
 **`htmlSnippet`** | The description of the search result in html format as seen on google<br>
 **`formattedUrl`** | The URL of the search result as seen on google<br>
 **`htmlFormattedUrl`** |  The URL of the search result formatted in html format as seen on google<br>
 **`pagemap.cse_thumbnail`** | The thumbnail of the search result<br>
 **`pagemap.cse_image`** | The image of the search result<br>
 **`cacheId`** | The ID of the cached version of the page. The url format for cached pages is `https://webcache.googleusercontent.com/search?q=cache:${cacheID}:${siteURL}`
