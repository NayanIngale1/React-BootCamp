# **HTML,WEB questions**

## **Explain briefly what happens when you hit a url ? explain DNS lookup**

_So in simple language, whenever you hit URL you are basically seing a web page. But the computer only understands the IP address. So we need to convert our URL into perticular IP address. Looking forword to DNS, DNS is nothing but **Domain Name system**. It is an automatic process that converts domain names to its corresponding IP address So that web browser can understands which web page you want to access on the internet. This process is called as DNS LookUp.
There are two Different Types of DNS : forward DNS and reverse DNS lookups._

- _Forward DNS lookup is a request that is used to obtain an IP address by searching the domain._

- _Reverse DNS is the exact opposite of forward DNS. It is a lookup request that is used to obtain the domain name related to an IP address._

---

## **What is a URLs full form? Explain what a url is and the four parts it consists of The protocol in use The hostname of the server The location of the file The arguments to the file**

_URL stands for **Uniform Resource Locator**. A URL is nothing but the address of a given unique resource on the Web. Each valid URL points to a unique resource. Such resources can be an HTML page, a CSS document, an image, etc_

     example:- https://www.google.com

_URL contains following parts :_

### Protocol :

https - Hyper Tex Transfer Protocol. It is protocol used over the internet. As it's name this protocol is uset to read, to send, to write, to access HTML pages across the internet

### Hostname or Domain name :

A host, or website, on the Internet is identified by a host name, such as www.google.com . Host names are sometimes called domain names.
Domain has again three parts :

    " www " is Sub-domain
    " google " is the domain or second level domain
    " .com " is super domain or top level domain

### Path or The location of the file :

Path in URL always begins with forward slash ' / ' that also means the end of domain. The first slash reapresents the root folder and form there next part is path to the file. It doesn't matter what is the file type like html, image or anything.

    ex: www.example.com/folder/path/index.html

### Query string :

Query string is nothing but the arguments to the file. It always start from the questions mark ' ? ' and it is made up of name value pairs.
we can also send multiple arguments seperating them by And symbol ' & '.

    ex: www.example.com/folder/path/index.html?name=value?key=value

demo link : [DEMO](https://prof3ssorst3v3.github.io/url-parts/ "DEMO")

---

## **What is HTTP protocol ?**

_The Hypertext Transfer Protocol is an application protocol that allows users to communicate data on the World Wide Web._

---

## **What is TCP protocol ?**

_TCP stands for Transmission Control Protocol a communications standard that enables application programs and computing devices to exchange messages over a network. It is designed to send packets across the internet and ensure the successful delivery of data and messages over networks.TCP organizes data so that it can be transmitted between a server and a client._

---

## **Explain all the different HTTP methods?**

_HTTP defines a set of request methods to indicate the desired action to be performed for a given resource.
The primary or most commonly-used HTTP methods are POST, GET, PUT, PATCH, and DELETE. These methods correspond to create, read, update, and delete (or CRUD) operations, respectively._

---

## **What are HTTP headers?**

_HTTP headers are the name or value pairs that are displayed in the request and response. In simpler terms, HTTP headers are the code that transfers data between a Web server and a client. HTTP headers are mainly used for the communication between the server and client in both directions. Usually, the header name and the value are separated by a single colon. Whitespace before the value is ignored._

---

## **What are some HTTP response codes? what does it mean? 2xx, 3xx, 4xx, 5xx**

_All HTTP response status codes are separated into five classes or categories. The first digit of the status code defines the class of response, while the last two digits do not have any classifying or categorization role. There are five classes defined by the standard:_

- **1xx** informational response – the request was received, continuing process
- **2xx** successful – the request was successfully received, understood, and accepted
- **3xx** redirection – further action needs to be taken in order to complete the request
- **4xx** client error – the request contains bad syntax or cannot be fulfilled
- **5xx** server error – the server failed to fulfil an apparently valid request

---

## **What does cache control on http response mean?**

_Cache-control is an HTTP header used to specify browser caching policies in both client requests and server responses. Policies include how a resource is cached, where it's cached and its maximum age before expiring (i.e., time to live)._

---

## **What is polling?**

_Polling is the process where the computer or controlling device waits for an external device to check for its readiness or state, often with low-level hardware. For example, when a printer is connected via a parallel port, the computer waits until the printer has received the next character._

---

## **What is long polling?**

_Polling is a technique that allows the servers to push information to a client. A technology where the client requests information from the server without expecting an immediate response. Long polling is a version of traditional polling that allows the server to send data to a client whenever available._

---

## **What are web sockets?**

_The WebSocket API is an advanced technology that makes it possible to open a two-way interactive communication session between the user's browser and a server. With this API, you can send messages to a server and receive event-driven responses without having to poll the server for a reply._

---

## **How is web sockets different from HTTP?**

_WebSocket is a protocol providing full-duplex communication channels over a single TCP connection. Where as, HTTP providing half-duplex communication.
Information exchange mode of WebSocket is bidirectional. Means, server can push information to the client (which does not allow direct HTTP)._

---

## **What is HTTPS?**

_HTTPS (Hypertext Transfer Protocol Secure) is an internet communication protocol that protects the integrity and confidentiality of data between the user's computer and the site. Users expect a secure and private online experience when using a website._

---

## **What is Cross Origin Resource Sharing? ( CORS ) Why do we need it?**

_Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources._

---

## **What does Access-Control-Allow-Origin header do?**

_Access-Control-Allow-Origin is a CORS (Cross-Origin Resource Sharing) header. When Site A tries to fetch content from Site B, Site B can send an Access-Control-Allow-Origin response header to tell the browser that the content of this page is accessible to certain origins._

---

## **What is clickjacking? How do you fix it?**

_Clickjacking is an attack that tricks a user into clicking a webpage element which is invisible or disguised as another element. This can cause users to unwittingly download malware, visit malicious web pages, provide credentials or sensitive information, transfer money, or purchase products online._

_A better approach to prevent clickjacking attacks is to ask the browser to block any attempt to load your website within an iframe. You can do it by sending the X-Frame-Options HTTP header._

---

## **What are some performance metrics for your website?**

_There are so many metrics but some of the most important ones are_

1.  **Page Speed** :- People don’t like waiting around! Keep your page speed as fast as possible to retain as large of an audience as possible.

2.  **Time to Title** :- Similar to your page speed, the time to title is the amount of time it takes for a website’s title to appear in a browser tab after an individual requests a website.

3.  **Time to Start Render** :- The time it takes from an individual making a request and the amount of time it takes for content to begin loading — even if it does not fully load — is called the time to start render.

4.  **Time to Interact** :- It refers to how much time it takes before individuals can begin to click on links, type in text fields, scroll on a page, and interact in other ways with a website.

5.  **DNS Lookup Speed** :- This refers to the amount of time it takes for your Domain Name System (DNS) provider to translate a domain name into an IP address. It’s important to note that there are faster and slower DNS providers out there, and if you’re using a slower provider, it can vastly slow down your DNS lookup speed.

6.  **Bounce Rate** :- People are “bouncing” away from your site without thoroughly searching through it, and sometimes without even taking the time for the site to load properly. It can also be defined as a single page visit to your site, with users failing to interact elsewhere.

7.  **Requests Per Second** :- Also sometimes referred to as “Throughput” or “Average Load,” this metric refers to the number of requests your server receives every second.

8.  **Error Rate** :- Some errors will occur on your site at any given time. Your error rate measures the number of errors occurring at any given time, keeping track of how many occur within a specific time frame.

9.  **Time to First Byte/Last Byte** :- We briefly touched on time to first byte as a subset of page speed, but it's an important enough metric to warrant its own breakdown.

10. **Conversion Rate** :- Last but not least, we can’t discuss metrics without talking about conversion rates. This refers to how many unique visitors end up converting into customers.

---

## **What does the following term mean?**

- Time to first byte,
- Page load time

_Time to First Byte (TTFB) refers to the time between the browser requesting a page and when it receives the first byte of information from the server._

_Page load time is the average amount of time it takes for a page to show up on your screen. It's calculated from initiation (when you click on a page link or type in a Web address) to completion (when the page is fully loaded in the browser)._

---

## **What do CDN or Content Delivery Networks do? When do you need a CDN?**

_A content delivery network (CDN) refers to a geographically distributed group of servers which work together to provide fast delivery of Internet content. A CDN allows for the quick transfer of assets needed for loading Internet content including HTML pages, javascript files, stylesheets, images, and videos._

---

## **What is the difference between Client Side Renderring and Server Side Renderring?**

_Client-side rendering manages the routing dynamically without refreshing the page every time a user requests a different route. But server-side rendering is able to display a fully populated page on the first load for any route of the website, whereas client-side rendering displays a blank page first. The client-side of a website refers to the web browser and the server-side is where the data and source code is stored._

---

## **What is Progressive Renderring**

_Progressive Server-Side Rendering is the technique of sequentially rendering parts of the web page on the server-side and send it to the client in portions without waiting for the entire page to be rendered._

---

## **What is the difference between Preloading and Prefetching resources?**

_Preload is an early fetch instruction to the browser to request a resource needed for a page (key scripts, Web Fonts, hero images). Prefetch serves a slightly different use case — a future navigation by the user (e.g between views or pages) where fetched resources and requests need to persist across navigations._

---

## **What are service workers?**

_A service worker is a type of web worker. It's essentially a JavaScript file that runs separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages._

___
