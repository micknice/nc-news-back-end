module.exports = [
  {
    title: 'Running a Node App',
    topic: 'coding',
    author: 'jessjelly',
    body: `
    In this second part of the series, we embark on a deeper exploration of how to effectively deploy and manage your Node.js application using Systemd for long-term stability. We'll also guide you through the crucial steps to set up your Node.js application in a production environment, ensuring its reliability and performance in real-world scenarios.
    
    **1. Leveraging Systemd for Long-Term Application Management:**
    
    Systemd offers a robust and efficient means of managing Node.js applications over the long haul. By creating custom service units, you can exercise fine-grained control over your application's lifecycle. Here are some key aspects to consider:
    
    - **Service Unit Configuration:** Craft a custom Systemd service unit file for your Node.js application. Define settings like the working directory, environment variables, and dependencies to ensure that your application launches smoothly.
    
    - **Logging and Monitoring:** Systemd simplifies the task of logging and monitoring. You can configure where and how your application's logs are stored and easily retrieve them using commands like \`journalctl\`. This logging capability is invaluable for debugging and maintaining the health of your application.
    
    - **Autostart and Restart Policies:** Systemd can be configured to automatically start your Node.js application upon system boot. Furthermore, you can specify restart policies, allowing your app to recover gracefully in the event of a crash or system reboot.
    
    - **Resource Management:** Utilize Systemd's resource management features to control the resources allocated to your Node.js application, preventing resource exhaustion and ensuring fair system resource sharing.
    
    **2. Setting Up a Production Environment:**
    
    Transitioning your Node.js application from development to production is a significant step, and careful planning is essential for success. Here are some considerations for setting up a robust production environment:
    
    - **Security:** Security should be a top priority. Implement robust security measures such as firewalls, intrusion detection systems, and routine security updates. Utilize Systemd's security features like \`ProtectHome\` and \`PrivateTmp\` to isolate your application from other system processes and improve security.
    
    - **Load Balancing and Scaling:** Depending on the anticipated traffic, consider load balancing your Node.js application to distribute incoming requests evenly. Tools like Nginx and HAProxy can assist with this. Additionally, prepare for scaling by containerizing your application with Docker or orchestrating it with Kubernetes.
    
    - **Performance Optimization:** Tune your Node.js application for production. Adjust settings related to resource allocation, concurrency, and caching to optimize performance under real-world conditions. Systemd can help manage resource limits, ensuring that your application doesn't overutilize system resources.
    
    - **Monitoring and Alerts:** Implement monitoring solutions such as Prometheus and Grafana to gain deep insights into your application's performance. Configure alerts to promptly respond to issues, and use Systemd's \`systemctl\` commands to check the health of your application at any time.
    
    - **Backup and Recovery:** Develop a robust backup and recovery strategy to safeguard against data loss and system failures. Automate backups using timed service units provided by Systemd to ensure data integrity.
    
    By addressing these critical aspects, you can confidently deploy your Node.js application in a production environment. The synergy between Node.js and Systemd empowers you to build and maintain scalable, resilient applications capable of thriving in demanding production scenarios. This comprehensive approach ensures the long-term success and reliability of your application.
    `,
    created_at: 1604728980000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?w=700&h=700',
  },
  {
    title: "The Rise Of Thinking Machines: How IBM's Watson Takes On The World",
    topic: 'coding',
    author: 'jessjelly',
    body: `
    Many people know Watson as the IBM-developed cognitive supercomputer that won the Jeopardy! gameshow in 2011. In truth, Watson is not actually a computer but a set of algorithms and APIs. Since its victory on national television, where it demonstrated an impressive ability to understand natural language and answer complex questions, IBM has harnessed Watson's cognitive capabilities to address a wide array of challenges spanning multiple industries, from healthcare to finance.
    
    At its core, Watson is a collection of powerful algorithms and application programming interfaces (APIs) designed to process and analyze vast amounts of data with human-like reasoning. This cognitive computing system leverages machine learning, natural language processing, and other AI technologies to derive insights, make predictions, and assist in decision-making.
    
    One of Watson's most notable achievements was its Jeopardy! triumph, where it competed against two of the show's greatest champions and emerged victorious. This watershed moment showcased the potential of cognitive computing to comprehend and process unstructured data, marking a significant leap in artificial intelligence.
    
    In the years following its Jeopardy! victory, IBM has continued to evolve and expand Watson's capabilities. It has ventured into numerous industries, offering tailored solutions to address industry-specific challenges. In healthcare, Watson has been employed to assist doctors in diagnosing diseases and recommending treatment options by analyzing vast medical records, research papers, and patient data. This has the potential to improve healthcare outcomes and reduce diagnostic errors.
    
    In the financial sector, Watson is used for predictive analytics to detect fraud, assess market trends, and manage investment portfolios. Its ability to analyze large datasets swiftly and accurately can provide traders and analysts with valuable insights to make informed decisions in a highly dynamic market environment.
    
    IBM's commitment to Watson's growth is evident through its ongoing partnerships and collaborations. The company has announced numerous strategic alliances with organizations across the globe to further extend Watson's reach and applicability. These partnerships aim to harness Watson's cognitive capabilities to tackle a broad spectrum of challenges in diverse domains.
    
    Whether it's aiding in disaster response, optimizing supply chain operations, or advancing scientific research, IBM's partnerships leverage Watson's cognitive prowess to create innovative solutions. By integrating Watson into various ecosystems, IBM strives to address the complex problems faced by businesses, governments, and society at large.
    
    In conclusion, Watson is more than just a computer; it's a groundbreaking cognitive computing system that has transformed the way we approach challenges in various industries. Its journey from winning Jeopardy! to becoming an indispensable tool for healthcare, finance, and many other sectors underscores the immense potential of artificial intelligence and machine learning. With ongoing partnerships and advancements, Watson's cognitive capabilities continue to be at the forefront of solving real-world problems, making our world smarter and more efficient.
    `,
    created_at: 1589418120000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?w=700&h=700',
  },
  {
    title: '22 Amazing open source React projects',
    topic: 'coding',
    author: 'happyamy2016',
    body: `
    This is a curated collection of open-source applications built using the React.js library. In this extensive curation process, we meticulously examined nearly 800 projects to identify and highlight the top 22. Out of these, 11 projects are developed with React Native, and the remaining 11 are based on the React library itself. This selection showcases the diversity and versatility of the React ecosystem in building web and mobile applications.
    
    To gauge the quality and utility of these projects, Mybridge AI employed a rigorous evaluation process that considered a variety of factors. The aim was to determine how valuable and beneficial these open-source applications are for programmers and developers across the globe.
    
    One of the primary criteria for selection was the project's popularity within the developer community, as indicated by the number of GitHub stars it has garnered. GitHub stars serve as a meaningful metric to gauge a project's traction and recognition among developers. In this collection, the 22 projects boasted an impressive average of 1,681 GitHub stars each, highlighting their widespread acclaim and adoption within the open-source community.
    
    Beyond just popularity, the selection process delved into the technical aspects, code quality, and real-world utility of these React-based applications. Here are some key considerations that contributed to their inclusion:
    
    1. **Functionality:** Each project had to demonstrate meaningful and practical functionality, whether it's a user-friendly UI component library, a versatile web application framework, or a feature-rich mobile app.
    
    2. **Innovation:** We looked for projects that push the boundaries of what's possible with React. Innovative approaches, unique solutions to common problems, and groundbreaking features were given priority.
    
    3. **Documentation:** Clear and comprehensive documentation is crucial for the open-source community. Projects that excelled in this area, providing helpful guides and resources, were favored.
    
    4. **Active Maintenance:** Open-source projects require regular maintenance and updates. We prioritized projects with active contributors and a commitment to ongoing development.
    
    5. **Community Engagement:** A thriving community of contributors, users, and supporters adds to the project's credibility. Projects with engaged and supportive communities were highly regarded.
    
    6. **Impact:** Lastly, we considered the potential impact and relevance of each project. Could it solve real-world problems? Was it applicable to a broad range of use cases? Projects with a significant and positive impact scored well.
    
    The 22 projects that made it into this curated collection represent a diverse spectrum of applications, from cutting-edge UI libraries that simplify frontend development to full-fledged web and mobile applications serving various purposes. They exemplify the power and flexibility of React and React Native in addressing the evolving needs of developers and businesses alike.
    
    In summary, this collection showcases the cream of the crop in the React.js and React Native ecosystem, with each project earning its place through a rigorous evaluation process. Whether you're a seasoned developer seeking innovative tools or a newcomer exploring the world of React, these open-source projects offer valuable insights, solutions, and inspiration to help you succeed in your web and mobile development endeavors.
    `,
    created_at: 1582974720000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?w=700&h=700',
  },
  {
    title: 'Making sense of Redux',
    topic: 'coding',
    author: 'jessjelly',
    body:`
    When I first embarked on my journey to learn React, I vividly recall delving into numerous articles and resources that discussed the vast ecosystem surrounding this JavaScript library. Among the plethora of articles, one particular piece resonated strongly with me. It candidly addressed the inherent complexity of the React ecosystem and the common sentiment among developers that they must grasp every facet of this ecosystem before effectively using React.
    
    As I reflect on my experience, having used React extensively for the past eight months, I can attest to the fact that understanding the entirety of the React ecosystem is akin to peeling back the layers of an intricate onion—there always seems to be more to uncover. However, my time immersed in React has provided me with valuable insights into when and why it might be appropriate to incorporate another technology—Redux, a variant of the Flux architecture.
    
    **The React Learning Journey:**
    
    The journey of learning React is both exhilarating and challenging. React's simplicity in rendering UI components and its emphasis on the component-based architecture make it an attractive choice for building modern web applications. Nevertheless, React's true power is fully appreciated when it is coupled with various complementary technologies that enhance its capabilities.
    
    **Navigating the Ecosystem:**
    
    The React ecosystem is an expansive and dynamic landscape that encompasses numerous libraries, tools, and best practices. This diversity can indeed be overwhelming for newcomers, leading to the feeling that one must become an expert in every aspect before being proficient in React development. This misconception can be discouraging and hinder the learning process.
    
    **React and Redux: A Synergetic Duo:**
    
    As I have delved deeper into React, I have come to recognize that React and Redux, in particular, form a synergistic duo that addresses specific challenges in building complex and stateful applications. Redux, a predictable state container, complements React's view layer by offering a centralized, predictable, and easily testable state management solution.
    
    While React excels at efficiently rendering user interfaces, Redux excels at managing application state. Redux's unidirectional data flow and single source of truth make it particularly valuable when dealing with intricate application states, data fetching, and asynchronous operations.
    
    **When to Consider Redux:**
    
    My experience has taught me that considering Redux is relevant when your React application reaches a certain level of complexity. Here are some scenarios in which integrating Redux becomes advantageous:
    
    1. **Global State Management:** When your application's state becomes unwieldy to manage locally within components, Redux provides a centralized state store accessible from any part of the application.
    
    2. **Data Sharing:** Redux simplifies the sharing of data between components that are not directly related or hierarchically connected in the component tree.
    
    3. **Middleware Integration:** Redux seamlessly integrates with middleware, allowing you to handle asynchronous actions, API calls, and side effects effectively.
    
    4. **Time-Travel Debugging:** Redux's built-in features facilitate time-travel debugging, enabling developers to rewind and inspect the application's state at different points in time—a powerful debugging tool.
    
    5. **Predictable State Changes:** Redux enforces a strict unidirectional data flow, ensuring predictable and traceable state changes, which can be invaluable in large-scale applications.
    
    In conclusion, my journey with React has been one of continuous learning and exploration within its vast ecosystem. While it is true that the React ecosystem can initially appear daunting, it's essential to understand that proficiency in React does not necessitate expertise in every associated technology. Instead, React's flexibility allows developers to incrementally incorporate additional tools and libraries, such as Redux, as the complexity of their applications demands.
    
    React and Redux, in particular, have proven to be a harmonious combination that enhances the development of complex, stateful applications. By recognizing the right time to introduce Redux, developers can harness its power to effectively manage application state while still enjoying React's simplicity and efficiency in building user interfaces.
    
    The journey of mastering React is an ongoing one, marked by continuous growth and adaptation. Embracing Redux as a complementary technology has enriched my understanding of how to leverage the strengths of both technologies, ultimately making me a more versatile and proficient React developer.
    `,
    created_at: 1599858720000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg?w=700&h=700',
  },
  {
    title: 'Please stop worrying about Angular 3',
    topic: 'coding',
    author: 'jessjelly',
    body: `
    Another Angular version planned already? It might come as a surprise, especially considering that Angular 2 was a significant milestone. You might be wondering, "Didn't Angular 2 just ship? Why Angular 3? What's going on?" Let's clear up the confusion.
    
    **No Massive Rewrite for Angular 3:**
    
    First and foremost, let's put to rest any misconceptions about Angular 3. There isn't going to be a massive rewrite akin to the transition from AngularJS (1.x) to Angular 2. The Angular team has shifted its approach to versioning to ensure smoother transitions and minimize disruptions for developers.
    
    **Understanding Angular's Versioning Strategy:**
    
    To comprehend the future of Angular 2 and the significance of Angular 3 and beyond, it's essential to grasp Angular's versioning strategy. The Angular team has adopted a predictable and reliable release cycle known as "Semantic Versioning" (SemVer). This approach allows developers to anticipate changes and plan accordingly.
    
    Under SemVer, version numbers consist of three parts: major, minor, and patch. Here's what each part signifies:
    
    - **Major Version:** This number changes when there are incompatible changes or significant new features that might require modifications to your code.
    
    - **Minor Version:** Minor updates introduce new features and enhancements in a backward-compatible manner, meaning they won't break your existing code.
    
    - **Patch Version:** Patch releases typically include bug fixes and minor improvements that maintain backward compatibility.
    
    **The Future of Angular 2:**
    
    Angular 2, which was a substantial departure from AngularJS, is here to stay for the foreseeable future. The Angular team is committed to providing long-term support (LTS) for Angular 2. This means that even as newer versions are introduced, Angular 2 will continue to receive critical updates, security fixes, and support, ensuring that your existing Angular 2 applications remain stable and maintainable.
    
    **Angular 3 and Beyond:**
    
    So, what's the role of Angular 3 and the versions that follow? The Angular team has adopted a predictable and gradual release cycle. Instead of introducing massive overhauls, they will focus on delivering smaller, more frequent updates. These updates will primarily fall into the "minor" category under SemVer, ensuring backward compatibility.
    
    Angular 3 and subsequent versions will continue to build on the solid foundation laid by Angular 2. They will bring incremental improvements, new features, and optimizations without disrupting your existing projects. Developers can expect a smooth transition from one minor version to the next, making it easier to stay up-to-date with the latest enhancements.
    
    **What Angular 3 Means for You:**
    
    As a developer, this new versioning strategy is good news. It means you won't have to undergo the same level of migration and relearning that was required when transitioning from AngularJS to Angular 2. You can adopt new features and improvements at your own pace, without the pressure of a major rewrite.
    
    Angular 3 and its successors will empower you to stay on the cutting edge of web development, taking advantage of the latest tools and enhancements while preserving the stability of your existing applications. This iterative approach to development ensures that Angular remains a modern and sustainable choice for building web applications.
    
    In conclusion, Angular 3 is not a daunting shift but rather a part of Angular's commitment to continuous improvement. The Angular team's embrace of SemVer and their focus on gradual enhancements mean that developers can look forward to a future where staying current with Angular is more manageable and less disruptive. Whether you're starting a new project or maintaining existing ones, Angular's evolution promises a smoother and more developer-friendly experience.
    `,
    created_at: 1587488760000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/14011035/pexels-photo-14011035.jpeg?w=700&h=700',
  },
  {
    title:
      'JavaScript’s Apply, Call, and Bind Methods are Essential for JavaScript Professionals',
    topic: 'coding',
    author: 'grumpy19',
    body: `
    Functions in JavaScript are more than just blocks of code; they are first-class citizens, and like many objects in JavaScript, they have methods. Among the most powerful and versatile methods available to functions are Apply, Call, and Bind. These methods are essential tools in a JavaScript developer's arsenal, allowing for greater control and flexibility when working with functions.
    
    **Functions as Objects:**
    
    Before diving into the details of Apply, Call, and Bind, it's crucial to understand that functions are objects in JavaScript. This fundamental concept is key to comprehending the inner workings of these methods. Just like any other object, functions can have properties and methods of their own.
    
    **Apply and Call: Close Cousins:**
    
    Apply and Call are two closely related methods available to all JavaScript functions. They share many similarities and are often used interchangeably. These methods serve several essential purposes in JavaScript development:
    
    - **Borrowing Methods:** Apply and Call enable the borrowing of methods from one object to another. This is particularly useful in scenarios where you want to reuse a method from one object within a different context.
    
    - **Explicitly Setting "this":** One of the primary applications of Apply and Call is to explicitly set the value of the "this" keyword within a function. By doing so, you can control the context in which the function executes.
    
    **Apply for Variable-Arity Functions:**
    
    Apply stands out in its ability to work with variable-arity functions. A variable-arity function is one that can accept a varying number of arguments. Apply allows you to pass an array of arguments to such functions, making it incredibly flexible.
    
    For instance, imagine you have a function that calculates the sum of an arbitrary number of values. Using Apply, you can pass an array of values as arguments, and the function will handle them appropriately.
    
    **Call: Simplicity and Clarity:**
    
    Call is similar to Apply but differs in how it accepts arguments. Instead of taking an array of arguments, Call accepts arguments individually. This can lead to clearer and more concise code in scenarios where you have a fixed number of arguments to pass to a function.
    
    **Bind: Creating New Functions:**
    
    While Apply and Call are used to invoke functions with specific contexts and arguments, Bind is different. Bind is a method that creates a new function, known as a bound function, with a specified "this" value. This bound function can be invoked independently and retains the context provided during binding.
    
    Bind is particularly valuable when you want to create functions with predefined behavior. It's commonly used in event handling, where you want to ensure that a specific context is maintained when the event triggers the associated function.
    
    **Practical Applications:**
    
    In real-world development, these methods are used extensively. For instance, when working with object-oriented programming in JavaScript, Apply and Call are used to reuse methods from parent classes within child classes, promoting code reusability and maintainability.
    
    Additionally, these methods are indispensable in callback functions, where "this" context needs to be preserved. They play a crucial role in event handling, enabling developers to define how a function behaves when triggered by an event.
    
    In conclusion, Apply, Call, and Bind are powerful tools that every JavaScript developer should have in their toolkit. They empower you to control the execution context of functions, reuse methods, and create new functions with specific contexts. While Apply and Call are closely related and excel in different use cases, Bind is invaluable for creating bound functions that retain a predefined context. By mastering these methods, you can become a more proficient JavaScript developer, capable of handling complex scenarios with finesse.
    `,
    created_at: 1605107340000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/4383298/pexels-photo-4383298.jpeg?w=700&h=700',
  },
  {
    title: 'Using React Native: One Year Later',
    topic: 'coding',
    author: 'tickle122',
    body: `
    During my interview for the iOS developer position at Discord last spring, I had an enlightening conversation with Stanislav, the tech lead. He confidently stated, "React Native is the future. We will use it to build our iOS app from scratch as soon as it becomes public." As a native iOS developer with prior skepticism about using web technologies for mobile app development, Stanislav's proclamation raised eyebrows. My previous experiences with tools like PhoneGap had left me wary of such an approach. However, my journey with React Native since then has been nothing short of transformative, solidifying the wisdom of that decision.
    
    **Doubts and Skepticism:**
    
    Before delving into my experiences with React Native, it's essential to address the initial doubts and skepticism I harbored as a native iOS developer. The idea of utilizing web technologies to create mobile apps seemed unconventional and unproven. Past encounters with cross-platform tools had often resulted in subpar performance and limited native functionality.
    
    **React Native: A Paradigm Shift:**
    
    My journey with React Native marked a significant paradigm shift in my perspective. Unlike some previous cross-platform tools, React Native does not rely on web views or HTML rendering to mimic native behavior. Instead, it leverages a bridge that connects JavaScript code with native components, allowing for seamless integration of native modules and performance optimization.
    
    **Benefits of React Native:**
    
    As I delved deeper into React Native, I began to appreciate its numerous benefits:
    
    1. **Efficiency:** React Native offers a shared codebase for both iOS and Android, reducing development time and effort. Developers can write once and deploy on multiple platforms, significantly improving efficiency.
    
    2. **Native Look and Feel:** Unlike web-based solutions, React Native provides a truly native user experience. It uses native components, ensuring that apps look and feel like they were developed using platform-specific tools.
    
    3. **Performance:** React Native achieves impressive performance by running JavaScript on a separate thread and communicating with native modules via a bridge. This approach minimizes lag and results in snappy, responsive apps.
    
    4. **Community and Ecosystem:** React Native benefits from a thriving community and an extensive ecosystem of libraries and packages. This wealth of resources accelerates development and problem-solving.
    
    5. **Hot Reloading:** One of my favorite features of React Native is hot reloading, which allows developers to instantly see the effects of code changes without rebuilding the entire app. This feature greatly enhances development speed and productivity.
    
    **The Discord Experience:**
    
    My experience working on Discord's iOS app using React Native has been eye-opening. The decision to adopt React Native was driven by the desire for rapid development and cross-platform compatibility. It has proven to be a wise choice.
    
    We've been able to maintain a single codebase for both iOS and Android, ensuring feature parity and consistent user experiences across platforms. Our app boasts the responsiveness and fluidity expected from native applications, thanks to React Native's performance optimizations.
    
    Furthermore, the Discord team actively contributes to the React Native ecosystem, benefiting not only our app but the broader developer community. Our journey with React Native has reaffirmed Stanislav's assertion that it is indeed the future of mobile app development.
    
    **A Transformative Journey:**
    
    In retrospect, my journey with React Native has been transformative. It has dispelled my initial doubts and reservations about using web technologies for mobile development. React Native's commitment to native performance and user experience, coupled with its efficiency and thriving ecosystem, has made me a believer in its potential.
    
    As a native iOS developer, embracing React Native has expanded my skill set and broadened my horizons. It has reinforced the idea that technology evolves, and embracing new approaches can lead to breakthroughs and efficiencies previously unattainable.
    
    In conclusion, my experience with React Native at Discord has not only led to the successful development of a cross-platform iOS app but has also instilled in me a newfound appreciation for the power and potential of this technology. React Native is not just a framework; it's a paradigm shift that is reshaping the future of mobile app development.
    `,
    created_at: 1602984360000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/6424586/pexels-photo-6424586.jpeg?w=700&h=700',
  },
  {
    title: 'Express.js: A Server-Side JavaScript Framework',
    topic: 'coding',
    author: 'cooljmessy',
    body: `
    JavaScript, often associated with front-end interactivity, has transcended its role and expanded its capabilities to encompass not just the front end but also the entire spectrum of web development. What many might not realize is that JavaScript can now seamlessly extend from the front end to the back end, allowing developers to build complete websites entirely with this versatile language.
    
    **A Journey Beyond Front-End Interactivity:**
    
    While JavaScript is commonly known for adding interactivity and dynamism to the front end of websites, its potential extends far beyond that initial role. In a remarkable evolution, JavaScript has evolved to power entire websites, both on the front end and back end.
    
    **Node.js and Express.js: Enabling Full-Stack JavaScript:**
    
    Two pivotal technologies, Node.js and Express.js, have played a transformative role in enabling full-stack JavaScript development. They have opened up new horizons by allowing developers to leverage JavaScript for server-side applications—a realm previously dominated by other programming languages.
    
    - **Node.js:** Node.js is the runtime environment that makes server-side JavaScript possible. It empowers developers to build robust and scalable server-side applications using JavaScript. With Node.js, JavaScript can now handle tasks typically associated with server-side scripting, such as file operations, networking, and database interactions.
    
    - **Express.js:** Express.js, often simply referred to as Express, is a minimalist web application framework built on top of Node.js. It adds essential structure and functionality for building web applications, making it feasible to create entire websites with JavaScript. Express simplifies routing, middleware handling, and other web development tasks, allowing developers to focus on building features and functionality.
    
    **The Synergy of Express and Node:**
    
    The synergy between Express and Node.js is at the heart of the full-stack JavaScript revolution. Together, they enable developers to conceive, create, and deploy entire websites using JavaScript throughout the stack. This seamless integration redefines web development by unifying front-end and back-end technologies into a cohesive ecosystem.
    
    **Why Express Matters:**
    
    Express is a lightweight framework that sits on top of Node.js, enhancing its capabilities for web development. It is well-suited for developers looking to harness the power of Node.js while benefiting from built-in web application features. Express's minimalist approach allows it to complement Node.js without overshadowing its inherent strengths.
    
    Express provides developers with an intuitive API, simplifying tasks such as routing, request handling, and middleware management. This streamlines the development process and accelerates the creation of feature-rich web applications. Additionally, Express's flexibility allows developers to choose their preferred libraries and tools, fostering a vibrant and diverse ecosystem.
    
    **Changing the Web Development Landscape:**
    
    Express and Node.js are fundamentally altering the way developers approach web development. With this duo, JavaScript is no longer confined to the front end; it has become a universal language that spans the entire web stack.
    
    Developers can now conceive and build server-side applications using Node.js and seamlessly translate them into websites with Express. This unified approach simplifies the development lifecycle, reduces the need for context switching between languages, and enhances overall productivity.
    
    In conclusion, the integration of Express.js and Node.js has ushered in a new era of web development. JavaScript, once primarily associated with front-end interactivity, has evolved into a versatile full-stack language capable of powering entire websites. Express and Node.js offer developers the tools to build feature-rich, scalable, and performant web applications—all while staying within the JavaScript ecosystem. This transformative shift is reshaping the web development landscape, making full-stack JavaScript development not just a possibility, but a practical and powerful choice for modern web development.
    `,
    created_at: 1601940180000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/11035482/pexels-photo-11035482.jpeg?w=700&h=700',
  },
  {
    title: 'Learn HTML5, CSS3, and Responsive WebSite Design in One Go',
    topic: 'coding',
    author: 'grumpy19',
    body: `
    In the ever-evolving landscape of web development, CSS3 and HTML5 have emerged as powerful tools that are now widely supported in modern browsers. Embracing these technologies is not just an option; it's a necessity for staying relevant in the rapidly advancing world of web design and development. While some may hesitate to fully dive into CSS3 and HTML5, believing they can rely on older techniques, the reality is quite the opposite. There are numerous compelling advantages to utilizing CSS3 and HTML5 today, and forgoing them comes with its own set of limitations and challenges.
    
    **Universal Browser Support:**
    
    One of the primary reasons to embrace CSS3 and HTML5 is the near-universal support they enjoy across modern browsers. The major players, including Chrome, Firefox, Safari, and Edge, have fully incorporated these technologies into their rendering engines. This means that your web designs and features will work seamlessly for the vast majority of users, providing a consistent and reliable experience.
    
    **Compatibility Solutions for Older Browsers:**
    
    For those concerned about older browsers lacking support, various techniques and libraries are readily available to patch the gaps. Polyfills and shims, for instance, can be employed to emulate HTML5 and CSS3 features in older browser versions. This means you can utilize the latest web technologies without sacrificing compatibility with older systems.
    
    **Performance and Efficiency:**
    
    CSS3 and HTML5 are designed with performance and efficiency in mind. CSS3 allows for streamlined stylesheets with advanced features like animations, transitions, and transformations, all of which can be executed with minimal overhead. HTML5 introduces semantic elements that improve the structure of web documents, making them more accessible and search engine-friendly.
    
    **Enhanced User Experience:**
    
    CSS3 and HTML5 enable the creation of rich, interactive user experiences. With CSS3, you can craft visually stunning designs, responsive layouts, and engaging animations that captivate users. HTML5 brings native support for multimedia elements like audio and video, eliminating the need for third-party plugins like Flash. This not only enhances the user experience but also simplifies development.
    
    **Mobile Responsiveness:**
    
    In an era dominated by mobile devices, responsiveness is paramount. CSS3's media queries and flexible layout techniques allow you to create designs that adapt seamlessly to various screen sizes and orientations. HTML5's native support for touch events and geolocation further enhances the mobile experience, making it easier to build mobile-friendly websites and applications.
    
    **Accessibility and SEO:**
    
    HTML5 introduces semantic elements like <header>, <nav>, <main>, and <footer> that improve the structure of web documents. These elements not only enhance accessibility for users with disabilities but also provide search engines with better context and understanding of your content. This can lead to improved search engine rankings and visibility.
    
    **Future-Proofing Your Skills:**
    
    Web development is a dynamic field, constantly evolving with new technologies and standards. By fully embracing CSS3 and HTML5, you future-proof your skills and remain competitive in the job market. Staying updated with the latest web technologies ensures that you can tackle modern development challenges with confidence.
    
    **Conclusion:**
    
    In conclusion, the advantages of using CSS3 and HTML5 in modern web development far outweigh any perceived disadvantages. These technologies offer universal browser support, compatibility solutions for older browsers, enhanced performance, improved user experiences, mobile responsiveness, accessibility benefits, and the opportunity to future-proof your skills. Forgoing CSS3 and HTML5 in favor of outdated techniques not only limits your design and development capabilities but also hinders your ability to provide a seamless and accessible web experience for users across the globe.
    
    Embracing CSS3 and HTML5 isn't just a trend; it's a fundamental shift that empowers developers to create innovative, responsive, and accessible web solutions. As the web continues to evolve, these technologies will remain at the forefront of web development, driving progress and shaping the digital landscape.
    `,
    created_at: 1590505560000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?w=700&h=700',
  },
  {
    title:
      'An Introduction to JavaScript Object Notation (JSON) in JavaScript and .NET',
    topic: 'coding',
    author: 'cooljmessy',
    body: `
    When designing an application that communicates with a remote computer, the choice of a data format and exchange protocol is a crucial decision. There exists a plethora of open and standardized options, and the selection depends on the specific requirements of the application and the existing functionality it must integrate with. One widely used option is SOAP-based web services, which format data within an XML payload enclosed within a SOAP envelope. While XML serves well in many application scenarios, it has certain limitations that make it less suitable for others. One such context where XML is often less than ideal is in the realm of Ajax-style web applications.
    
    **Ajax and Its Unique Demands:**
    
    Ajax, short for Asynchronous JavaScript and XML, is a technique employed to construct interactive web applications that provide users with a more responsive experience. It achieves this by making lightweight, out-of-band calls to the web server instead of full-page postbacks. These asynchronous calls are initiated on the client side using JavaScript, involving tasks such as formatting data, transmitting it to the web server, and processing the returned data.
    
    While most web browsers are capable of constructing, sending, and parsing XML, JavaScript Object Notation (JSON) offers a standardized data exchange format that is better suited for Ajax-style web applications. JSON is an open, text-based format (as defined in RFC 4627) that is not only human-readable but also platform-independent, with a wide range of available implementations.
    
    **The Merits of JSON:**
    
    Data conforming to the JSON standard is lightweight and can be effortlessly parsed by JavaScript implementations, making it the ideal choice for data exchange in Ajax web applications. JSON's simplicity and efficiency are particularly evident in this context.
    
    Moreover, JSON is not confined solely to Ajax web applications. It is versatile and applicable in virtually any scenario where structured information needs to be exchanged or stored as text. JSON's adaptability has led to its widespread adoption across various domains.
    
    **JSON vs. XML:**
    
    To better understand the advantages of JSON in the context of web applications, it's essential to compare it to XML, a format commonly used in similar scenarios.
    
    1. **Readability:** JSON is human-readable, much like XML. However, JSON's syntax is simpler and more concise, which can result in cleaner, more easily comprehensible data representations.
    
    2. **Parsing:** JSON data can be parsed by JavaScript natively, making the process seamless and efficient. In contrast, parsing XML in JavaScript can be more cumbersome and resource-intensive.
    
    3. **Lightweight:** JSON data payloads tend to be smaller compared to their XML counterparts. This attribute is particularly beneficial in scenarios where minimizing data transfer overhead is critical, such as mobile applications.
    
    4. **Platform Independence:** JSON, like XML, is platform-independent. It can be used across various programming languages and platforms, enhancing interoperability.
    
    **JSON in Practice:**
    
    One notable JSON implementation is Jayrock, an open-source JSON library designed for .NET. Jayrock facilitates the use of JSON in .NET applications, making it accessible for developers working in this ecosystem. Examples of creating and parsing JSON messages are available in both JavaScript and C#, illustrating the ease of working with JSON in different environments.
    
    **Conclusion:**
    
    In the dynamic world of web development, choosing the right data exchange format and protocol is paramount. JSON has emerged as a formidable contender, particularly in the context of Ajax-style web applications. Its lightweight nature, ease of parsing in JavaScript, platform independence, and versatility make it an attractive choice for developers seeking efficient and responsive data exchange.
    
    While XML continues to have its place in various scenarios, JSON has risen to prominence due to its suitability for modern web development demands. As the digital landscape evolves, JSON is likely to remain a key player in facilitating seamless data exchange between web applications and remote servers, ensuring a snappier and more interactive user experience.
    `,
    created_at: 1593692580000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/11035481/pexels-photo-11035481.jpeg?w=700&h=700',
  },
  {
    title: 'Designing Better JavaScript APIs',
    topic: 'coding',
    author: 'tickle122',
    body: `
    As a JavaScript developer, you'll eventually find yourself crafting code that extends far beyond a couple of lines within a jQuery plugin. Your code will evolve to perform a multitude of tasks, and ideally, it will be utilized by a diverse group of people, each approaching your code with varying needs, knowledge levels, and expectations. In this context, writing maintainable JavaScript code becomes not just a best practice but a necessity for long-term success and collaboration.
    
    **The Evolution of Your Code:**
    
    JavaScript is a versatile language that can be used for a wide range of applications, from simple DOM manipulation to complex server-side logic. As your projects grow in complexity and scope, so does your JavaScript code. It becomes the backbone of your web applications, responsible for handling data, user interactions, and much more.
    
    **Diverse Users, Diverse Needs:**
    
    When you write JavaScript code, you're not just writing it for yourself. You're creating code that others, including fellow developers, stakeholders, and users, will interact with. These individuals come from varied backgrounds, possess different levels of expertise, and have distinct expectations for your code.
    
    - **Fellow Developers:** Your code may be used and maintained by other developers. They may need to understand, modify, or extend your codebase. Writing code that is easy to read and follow is essential for efficient collaboration.
    
    - **Stakeholders:** Business stakeholders or project managers may rely on your code to achieve specific goals or deliver features. They require code that performs reliably and meets project requirements.
    
    - **End Users:** Ultimately, your code serves end users who interact with your web applications. They expect a seamless, bug-free experience. Code quality directly impacts user satisfaction.
    
    **The Importance of Maintainability:**
    
    Maintainable code is the key to addressing the diverse needs of your users and collaborators. Maintainability encompasses several critical aspects:
    
    - **Readability:** Well-structured code with clear naming conventions and comments is easier for others to read and understand. It minimizes the learning curve for developers who join the project later.
    
    - **Modularity:** Breaking down your code into smaller, modular components makes it more manageable. Modules can be reused, tested, and maintained independently, reducing complexity.
    
    - **Documentation:** Providing comprehensive documentation, including API references and usage guides, ensures that developers can quickly grasp how to use your code.
    
    - **Testing:** Implementing thorough testing, including unit tests and integration tests, helps catch and prevent bugs. Automated testing also simplifies the process of making changes and updates.
    
    - **Version Control:** Using version control systems like Git enables collaborative development, facilitates code review, and ensures that changes are tracked and reversible.
    
    **Best Practices for Writing Maintainable JavaScript:**
    
    To write maintainable JavaScript code, consider adopting the following best practices:
    
    1. **Consistent Coding Style:** Adopt a consistent coding style across your codebase. This includes indentation, naming conventions, and code organization. Tools like ESLint can help enforce coding standards.
    
    2. **Modularization:** Break your code into smaller, reusable modules. Each module should have a specific responsibility, making it easier to understand and test.
    
    3. **Comments and Documentation:** Use comments to explain complex logic, edge cases, and the purpose of functions or modules. Maintain up-to-date documentation that guides users and developers.
    
    4. **Error Handling:** Implement robust error handling to gracefully handle unexpected situations. Use try-catch blocks and provide informative error messages.
    
    5. **Testing:** Write comprehensive unit tests and integration tests to validate your code's behavior. Continuous integration tools can automate testing and ensure code quality.
    
    6. **Version Control:** Use Git or a similar version control system to track changes, collaborate with others, and manage code versions effectively.
    
    7. **Code Reviews:** Encourage code reviews among your team members. Code reviews promote knowledge sharing, identify issues early, and improve code quality.
    
    **The Benefits of Maintainable JavaScript:**
    
    Investing time and effort in writing maintainable JavaScript code yields several significant benefits:
    
    - **Collaboration:** Collaborators can work seamlessly with code that is well-structured and documented, leading to increased productivity.
    
    - **Scalability:** Maintainable code is easier to scale. As your project grows, you can add new features and modules with confidence.
    
    - **Reduced Bugs:** Well-tested and error-handled code is less prone to bugs, resulting in more stable applications.
    
    - **Faster Debugging:** When issues arise, maintainable code allows for quicker debugging and problem resolution.
    
    - **Adaptability:** Maintainable code is adaptable to changing project requirements and evolving user needs.
    
    **Conclusion:**
    
    In the world of JavaScript development, writing maintainable code is not just a good practice; it's a necessity. Your code serves a diverse audience with varying needs and expectations. By prioritizing maintainability through readability, modularity, documentation, testing, and collaboration, you can create JavaScript code that stands the test of time, fosters efficient development, and delivers exceptional user experiences.
    `,
    created_at: 1594080780000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?w=700&h=700',
  },
  {
    title: 'The battle for Node.js security has only begun',
    topic: 'coding',
    author: 'tickle122',
    body: 'The founder of the Node Security Project says Node.js still has common vulnerabilities, but progress has been made to make it more secure. Appearing at the recent Node Community Convention in San Francisco, project founder Adam Baldwin, chief security officer at Web consulting company &yet, emphasized risks, protections, and progress. Baldwin sees four risks within the Node ecosystem pertinent to the enterprise: the code dependency tree, bugs, malicious actors, and people. I think of [the dependency tree] more as the dependency iceberg, to be honest, Baldwin said, where your code is the ship and your dependencies that you have with your packaged JSON is that little tiny iceberg at the top. But developers need to be aware of the massive iceberg underneath, he stressed.',
    created_at: 1605446700000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/10845119/pexels-photo-10845119.jpeg?w=700&h=700',
  },
  {
    title: "What does Jose Mourinho's handwriting say about his personality?",
    topic: 'football',
    author: 'weegembump',
    body: "Jose Mourinho was at The O2 on Sunday night to watch Dominic Thiem in action against Novak Djokovic. Thiem took the first set before Djokovic fought back to claim the victory, but Manchester United's manager was clearly impressed with the Austrian's performance.",
    created_at: 1594239900000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?w=700&h=700',
  },
  {
    title: 'Who Will Manage Your Club in 2021?',
    topic: 'football',
    author: 'happyamy2016',
    body: 'Managerial changes are too common in the modern day game. Already in the 16/17 season, we have seen 14 managers lose their job from the Premier League to League Two. Swansea’s Francesco Guidolin became the first top division manager to lose his job but already question marks are raised regarding the future of the likes of David Moyes and Mike Phelan.',
    created_at: 1593011640000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?w=700&h=700',
  },
  {
    title: 'Why do England managers keep making the same mistakes?',
    topic: 'football',
    author: 'tickle122',
    body: 'When Roy Hodgson resigned after this summer’s debacle, the England managerial merry go-round set into motion raising hopes that change would improve the nations fortunes.  In came Sam Allardyce but the same old squad was announced – apart from Michail Antonio – resulting in a similar type performance that was customary this summer. I was an advocate of Big Sam’s appointment because of the fact he managed down the league and could see that talent lay beyond just the big clubs in the country. Roy had many faults but the biggest frustration for me was he failed to utilise an already diminished pool of English players by continuing to pick the so called elite players – who are all tainted with failure. To be fair to Allardyce his first England game came so early in the season that it made making whole sale changes difficult. We shall never know if he would have picked different players. Since he left the job it was up to Gareth Southgate to take on the mantle and again hope arose that he may start to pick some of the talented under 21s that he has worked with over the last five years.',
    created_at: 1584576840000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?w=700&h=700',
  },
  {
    title: 'History of FC Barcelona',
    topic: 'football',
    author: 'weegembump',
    body: "The history of Futbol Club Barcelona goes from the football club's founding in 1899 and up to current time. FC Barcelona, also known simply as Barcelona and familiarly as Barça, is based in Barcelona, Catalonia, Spain. The team was founded in 1899 by a group of Swiss, English and Spanish footballers led by Joan Gamper. The club played amateur football until 1910 in various regional competitions. In 1910, the club participated in their first of many European competitions, and has since amassed ten UEFA trophies and a sextuple. In 1928, Barcelona co-founded La Liga, the top-tier in Spanish football, along with a string of other clubs. As of 2016, Barcelona has never been relegated from La Liga, a record they share with Athletic Bilbao and arch-rival Real Madrid. The history of Barcelona has often been politically. Though it is a club created and run by foreigners, Barcelona gradually became a club associated with Catalan values. In Spain's transition to autocracy in 1925, Catalonia became increasingly hostile towards the central government in Madrid. The hostility enhanced Barcelona's image as a focal point for Catalonism, and when Francisco Franco banned the use of the Catalan language, the stadium of Barcelona became one of the few places the people could express their dissatisfaction. The Spanish transition to democracy in 1978 has not dampened the club's image of Catalan pride. In the 2000s – a period of sporting success in the club and an increased focus on Catalan players – club officials have openly called for Catalonia to become an independent state.",
    created_at: 1596413640000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/102448/pexels-photo-102448.jpeg?w=700&h=700',
  },
  {
    title: 'Which current Premier League manager was the best player?',
    topic: 'football',
    author: 'cooljmessy',
    body: "Premier League managers work with some of the top players in world football - but were they any good in their day? From European Cup and league title winners to one manager who only played at university, there's a diverse range of experience among the top-flight bosses. We've taken a look at the playing achievements and ability of the current Premier League managers and ranked them. Read on to see who ranks where...",
    created_at: 1584616500000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/47343/the-ball-stadion-horn-corner-47343.jpeg?w=700&h=700',
  },
  {
    title: 'The People Tracking Every Touch, Pass And Tackle in the World Cup',
    topic: 'football',
    author: 'grumpy19',
    body: 'With each click and drag of a mouse, young soccer fanatics are creating the building blocks of the advanced stats that are changing how the sport is played, watched and analyzed. Opta and Prozone are among the companies that have taken soccer stats far beyond goals and saves, into the realm of pass completion percentage, defensive touches, percentage of aerial balls won, tackle percentage and goals scored above expectation. Cameras alone can’t process all these stats. So companies employ people — mostly young, mostly male, most logging matches in their spare time as a second job — to watch matches and document every event. Their work has helped develop stats that capture the value of players who don’t score many goals, but who set them up with pinpoint passing and hustle. Teams use advanced stats to decide which players to buy and put on the pitch. And fans, whether they like it or not, read and hear more numbers than ever before about this sport that for so long bucked the sports-analytics trend.',
    created_at: 1597676580000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/1884576/pexels-photo-1884576.jpeg?w=700&h=700',
  },
  {
    title: 'Who are the most followed clubs and players on Instagram?',
    topic: 'football',
    author: 'jessjelly',
    body: "Manchester United are the UK's most popular club on Instagram, with over 14m people following their account for their latest photos and videos. United's total number of followers is over six million more than second-placed Arsenal (8.1m, while Chelsea are third on the list with 7.7m followers, according to data exclusively compiled for Sky Sports. Instagram has a 500m-strong community, with one in three people on the social media site (around 165m) following a sports account.",
    created_at: 1600002120000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/685382/pexels-photo-685382.jpeg?w=700&h=700',
  },
  {
    title: 'History of Football',
    topic: 'football',
    author: 'tickle122',
    body: 'It may come as a surprise to many, but football has a long and interesting history; sources suggest that the sport was first introduced in England as early as 1170 when an account describes youths going to the fields for a ‘game of ball’. Aspects of the game can even be traced back to as early as the second and third century BC in China. Sources taken from military manuals at the time describe an exercise called Tsu’ Chu, in which opponents used a leather ball filled with feathers and hair. The aim was to get the ball into a small net fixed on to bamboo canes while also defending themselves from attacks. Variations of the game are also documented in Egyptian and Greek society, proving that the sport has a long tradition throughout history.',
    created_at: 1583874300000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg?w=700&h=700',
  },
  {
    title: 'Agility Training Drills For Football Players',
    topic: 'football',
    author: 'tickle122',
    body: 'There are so many areas of focus when it comes to football training, from strength training to ensure you can muscle past the opposition to endurance training to help you perform at your best for the 90 minutes of play. However, agility training should never be lost in the mix when planning sessions, as these drills will help you to change direction without losing balance, speed or strength. As a result, your body’s alignment will improve, your reaction speeds lowered and the chance of injury on the pitch reduced. When planning agility training drills for football players, MaxiNutrition believes coaches should look towards cones and ladders. The following guide explains how to use both pieces of equipment effectively:',
    created_at: 1603706700000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/3448250/pexels-photo-3448250.jpeg?w=700&h=700',
  },
  {
    title: 'Defensive Metrics: Measuring the Intensity of a High Press',
    topic: 'football',
    author: 'tickle122',
    body: 'In this article, with the use of detailed Opta data, I am going to create a metric that I believe can quantify the extent and aggression of high presses employed by teams, both over a season and in any specific match. I’m going to see if it is possible define the intensity of a press with the use of numbers, more specifically by using some of the events that Opta record. Why would anyone want to do this? Well, for pretty much the same reason that we undertake any analytics study. If we can develop an objective scale which measures the intensity of a press then coaches can quickly see at a glance the strength, or otherwise, of the high pressing that their opposition has utilised in recent games. Teams or fans can also assess how much pressure their team exerted on the opposition in deep positions, and who knows, perhaps in time we will be able to assess the effectiveness that individual players have on the ability of their team to press. In essence we can take what is otherwise a subjective description and reduce it to one number so that it allows for comparison, analysis and ranking, if so desired.',
    created_at: 1587129000000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/906073/pexels-photo-906073.jpeg?w=700&h=700',
  },
  {
    title: 'Sunday league football',
    topic: 'football',
    author: 'weegembump',
    body: 'Sunday league football is a term used in the United Kingdom to describe those association football leagues which play on Sunday, as opposed to the more usual Saturday. These leagues tend to be lower standard amateur competitions, whose players may have less ability or less time to devote to football. The term pub league can also be used, due to the number of public houses that enter teams. Sunday leagues are sanctioned by the local County Football Association. There is no organised promotion or relegation between leagues, unlike in the National League System, which covers the top few levels of amateur football, although many leagues operate several divisions with promotion and relegation between them. However, ambitious Sunday teams may apply to join a Saturday league for a higher standard of football, and from there graduate to the FA-sanctioned leagues.',
    created_at: 1584887100000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/774321/pexels-photo-774321.jpeg?w=700&h=700',
  },
  {
    title: 'Game of talents: management lessons from top football coaches',
    topic: 'football',
    author: 'jessjelly',
    body: 'At lunchtime on the day of the Champions League final in 2012, Chelsea’s manager Roberto Di Matteo had selected 10 of his 11 players. He just didn’t know who to play in left midfield. The player would have to combat Bayern Munich’s brilliant Arjen Robben and Philipp Lahm. Going into the last team meeting, Di Matteo had a private chat with his left-back, Ashley Cole. He outlined the situation, then asked Cole who he would play at left-midfield. Instead of naming a seasoned star, Cole said: “Ryan Bertrand.” The 22-year-old reserve Bertrand had never played in the Champions League, let alone in club football’s biggest game. “Why?” asked Di Matteo, surprised. “I trust him,” replied Cole. Bertrand played well, and Chelsea beat Bayern on penalties. In part, this was a victory for talent management. Di Matteo had put aside his ego, and let trust between two players drive the decision. Talent management has been a business obsession at least since 1997, when the consultancy McKinsey identified a “war for talent”. The most visible battleground of this “war” is team sport. Football, in particular, is “the quintessential model for modern-day talent-dependent business”, writes Chris Brady, professor at Salford Business School. Big football clubs pay more than half their revenues to between 3 and 7 per cent of their workforce: the players. These young men are rich, multinational, mobile, often equipped with large egos and therefore hard to manage. Football managers are, above all, talent managers.',
    created_at: 1594336440000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/168872/pexels-photo-168872.jpeg?w=700&h=700',
  },
  {
    title: 'Sweet potato & butternut squash soup with lemon & garlic toast',
    topic: 'cooking',
    author: 'weegembump',
    body: 'Roast your vegetables in honey before blitzing into this velvety smooth, spiced soup - served with garlicky, zesty ciabatta slices for dipping',
    created_at: 1583961360000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?w=700&h=700',
  },
  {
    title: 'HOW COOKING HAS CHANGED US',
    topic: 'cooking',
    author: 'weegembump',
    body: 'In a cave in South Africa, archaeologists have unearthed the remains of a million-year-old campfire, and discovered tiny bits of animal bones and ash from plants. It’s the oldest evidence of our ancient human ancestors—probably Homo erectus, a species that preceded ours—cooking a meal.',
    created_at: 1586134800000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/2284166/pexels-photo-2284166.jpeg?w=700&h=700',
  },
  {
    title: 'Thanksgiving Drinks for Everyone',
    topic: 'cooking',
    author: 'grumpy19',
    body: 'Thanksgiving is a foodie’s favorite holiday. Mashed potatoes, cranberry sauce, stuffing, and last but not least, a juicy turkey. Don’t let your meticulous menu fall short of perfection; flavorful cocktails are just as important as the meal. Here are a few ideas that will fit right into your festivities.',
    created_at: 1579908120000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?w=700&h=700',
  },
  {
    title: 'High Altitude Cooking',
    topic: 'cooking',
    author: 'happyamy2016',
    body: 'Most backpacking trails vary only a few thousand feet elevation. However, many trails can be found above 10,000 feet. But what many people don’t take into consideration at these high altitudes is how these elevations affect their cooking.',
    created_at: 1578097440000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/691114/pexels-photo-691114.jpeg?w=700&h=700',
  },
  {
    title: 'A BRIEF HISTORY OF FOOD—NO BIG DEAL',
    topic: 'cooking',
    author: 'tickle122',
    body: "n 1686, the croissant was invented in Austria. That's a fun fact I'd probably never had known or maybe don't even really need to know, but now I do, thanks to Julia Rothman's Food Anatomy: The Curious Parts & Pieces of Our Edible World. Rothman has an entire series of illustrated Anatomy books, including Nature and Farm, packed with infographics, quirky facts, and maps that you can get lost in for hours—in a fun way, not in a boring textbook way. It makes you wonder why textbooks aren't this fun to read. Can someone look into this? Thanks.",
    created_at: 1578341520000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/357743/pexels-photo-357743.jpeg?w=700&h=700',
  },
  {
    title:
      'Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams',
    topic: 'cooking',
    author: 'jessjelly',
    body: "What if, for once, your Thanksgiving sides were just as dazzling as the centerpiece turkey? Imagine a world where presenting a platter of seasonal vegetables inspires the same amount of cooing that the turkey does. Welcome to the world of twice-baked butternut squash. Sure, you could just roast some squash wedges and call it a day. But where's the fun in that? To make this year's most impressive vegetable side, Epi's food director Rhoda Boone gave super-seasonal butternut squash the twice-baked potatoes treatment: Mash the inside of the vegetable with butter, cream, and anything else that might make it more delicious, then pile it back into the vegetable, bake it until golden and velvety. The result is a jaw-dropping, brightly colored sweet-meet-savory butternut squash side dish. Here are just a few more reasons this creation belongs on this year's Thanksgiving table:",
    created_at: 1578774000000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/175753/pexels-photo-175753.jpeg?w=700&h=700',
  },
  {
    title: 'What to Cook This Week',
    topic: 'cooking',
    author: 'tickle122',
    body: 'Good morning. Here’s the plan for the week, not including breakfast because I’m on a farina kick and that’s not to everyone’s taste, and not including lunch because really when it comes to the midday hours you should get out of the office or the house and walk around. If you get something to eat, great, but the most important thing is to be outside where the stories are. There’s nothing happening at your desk but a screen. Anyway! I’m thinking chicken paprikash for dinner tonight, a nod toward the coming fall, served over buttery egg noodles, with green beans on the side. If you have the time, make an apple cake for dessert.',
    created_at: 1591672740000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg?w=700&h=700',
  },
  {
    title: 'Halal food: Keeping pure and true',
    topic: 'cooking',
    author: 'grumpy19',
    body: "CHINA’S cities abound with restaurants and food stalls catering to Muslims as well as to the many other Chinese who relish the distinctive cuisines for which the country’s Muslims are renowned. So popular are kebabs cooked by Muslim Uighurs on the streets of Beijing that the city banned outdoor grills in 2014 in order to reduce smoke, which officials said was exacerbating the capital’s notorious smog (the air today is hardly less noxious). Often such food is claimed to be qing zhen, meaning 'pure and true', or halal, prepared according to traditional Islamic regulations. But who can tell? Last year angry Muslims besieged a halal bakery in Xining, the capital of Qinghai province, after pork sausages were found in the shop’s delivery van. There have been several scandals in recent years involving rat meat or pork being sold as lamb. These have spread Muslim mistrust of domestically produced halal products.",
    created_at: 1592514480000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/954677/pexels-photo-954677.jpeg?w=700&h=700',
  },
  {
    title: 'Seafood substitutions are increasing',
    topic: 'cooking',
    author: 'weegembump',
    body: "'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
    created_at: 1600277160000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?w=700&h=700',
  },
  {
    title: 'The Notorious MSG’s Unlikely Formula For Success',
    topic: 'cooking',
    author: 'grumpy19',
    body: "The 'umami' craze has turned a much-maligned and misunderstood food additive into an object of obsession for the world’s most innovative chefs. But secret ingredient monosodium glutamate’s biggest secret may be that there was never anything wrong with it at all.",
    created_at: 1606043580000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700',
  },
  {
    title: 'Stone Soup',
    topic: 'cooking',
    author: 'cooljmessy',
    body: 'The first day I put my family on a Paleolithic diet, I made my kids fried eggs and sausage for breakfast. If they were still hungry, I told them, they could help themselves to more sausage, but they were not allowed to grab a slice of bread, or toast an English muffin, or pour themselves a bowl of cereal. This represented a reversal of the usual strictures, and they were happy to oblige. It was like some weird, unexpected holiday—Passover in July.',
    created_at: 1590477900000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/33242/cooking-ingredient-cuisine-kitchen.jpg?w=700&h=700',
  },
  {
    title: 'The vegan carnivore?',
    topic: 'cooking',
    author: 'tickle122',
    body: 'The chef Richard McGeown has faced bigger culinary challenges in his distinguished career than frying a meat patty in a little sunflower oil and butter. But this time the eyes and cameras of hundreds of journalists in the room were fixed on the 5oz (140g) pink disc sizzling in his pan, one that had been five years and €250,000 in the making. This was the world’s first proper portion of cultured meat, a beef burger created by Mark Post, professor of physiology, and his team at Maastricht University in the Netherlands. Post (which rhymes with ‘lost’, not ‘ghost’) has been working on in vitro meat (IVM) since 2009. On 5 August this year he presented his cultured beef burger to the world as a ‘proof of concept’. Having shown that the technology works, Post believes that in a decade or so we could see commercial production of meat that has been grown in a lab rather than reared and slaughtered. The comforting illusion that supermarket trays of plastic-wrapped steaks are not pieces of dead animal might become a discomforting reality.',
    created_at: 1583788860000,
    votes: 0,
    article_img_url:
      'https://images.pexels.com/photos/1414651/pexels-photo-1414651.jpeg?w=700&h=700',
  },
];
