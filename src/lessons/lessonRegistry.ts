import { lazy, ComponentType } from "react";

// Foundation
const CF_README = lazy(() => import("./Computer-foundation/README"));
const CF_Module03LinuxTerminal = lazy(() => import("./Computer-foundation/Module03LinuxTerminal"));
const CF_Module04FileManagement = lazy(() => import("./Computer-foundation/Module04FileManagement"));

// Level 01 — HTML
const Module01GettingStarted = lazy(() => import("./Level_01_HTML/Module01GettingStarted"));
const Module02DocumentStructure = lazy(() => import("./Level_01_HTML/Module02DocumentStructure"));
const Module03TextandLists = lazy(() => import("./Level_01_HTML/Module03TextandLists"));
const Module04LinksNavigation = lazy(() => import("./Level_01_HTML/Module04LinksNavigation"));
const Module05ImagesMedia = lazy(() => import("./Level_01_HTML/Module05ImagesMedia"));
const Module06TablesForms = lazy(() => import("./Level_01_HTML/Module06TablesForms"));
const Module07ProjectBioPage = lazy(() => import("./Level_01_HTML/Module07ProjectBioPage"));
const HTML_README = lazy(() => import("./Level_01_HTML/README"));

// Level 02 — CSS
const CSS_Module01IntroductionCSS = lazy(() => import("./Level_02_CSS/Module01IntroductionCSS"));
const CSS_Module02SelectorsSpecificity = lazy(() => import("./Level_02_CSS/Module02SelectorsSpecificity"));
const CSS_Module03ColorsTypography = lazy(() => import("./Level_02_CSS/Module03ColorsTypography"));
const CSS_Module04BoxModel = lazy(() => import("./Level_02_CSS/Module04BoxModel"));
const CSS_Module05LayoutPositioning = lazy(() => import("./Level_02_CSS/Module05LayoutPositioning"));
const CSS_Module06FlexboxResponsive = lazy(() => import("./Level_02_CSS/Module06FlexboxResponsive"));
const CSS_Module07ProjectPortfolio = lazy(() => import("./Level_02_CSS/Module07ProjectPortfolio"));
const CSS_README = lazy(() => import("./Level_02_CSS/README"));

// Level 03 — JavaScript Basics
const JS_Module01Introduction = lazy(() => import("./Level_03_JavaScript_Basics/Module01Introduction"));
const JS_Module02VariablesDataTypes = lazy(() => import("./Level_03_JavaScript_Basics/Module02VariablesDataTypes"));
const JS_Module03OperatorsConditions = lazy(() => import("./Level_03_JavaScript_Basics/Module03OperatorsConditions"));
const JS_Module04Functions = lazy(() => import("./Level_03_JavaScript_Basics/Module04Functions"));
const JS_Module05ArraysLoops = lazy(() => import("./Level_03_JavaScript_Basics/Module05ArraysLoops"));
const JS_Module06DOMManipulation = lazy(() => import("./Level_03_JavaScript_Basics/Module06DOMManipulation"));
const JS_Module07ProjectQuiz = lazy(() => import("./Level_03_JavaScript_Basics/Module07ProjectQuiz"));
const JS_README = lazy(() => import("./Level_03_JavaScript_Basics/README"));

// Level 04 — JavaScript Advanced
const JSA_Module01ES6Features = lazy(() => import("./Level_04_JavaScript_Advanced/Module01ES6Features"));
const JSA_Module02AsyncJavaScript = lazy(() => import("./Level_04_JavaScript_Advanced/Module02AsyncJavaScript"));
const JSA_Module03WorkingAPIs = lazy(() => import("./Level_04_JavaScript_Advanced/Module03WorkingAPIs"));
const JSA_Module04ErrorHandling = lazy(() => import("./Level_04_JavaScript_Advanced/Module04ErrorHandling"));
const JSA_Module05ProjectWeather = lazy(() => import("./Level_04_JavaScript_Advanced/Module05ProjectWeather"));
const JSA_README = lazy(() => import("./Level_04_JavaScript_Advanced/README"));

// Level 05 — Git & GitHub
const GIT_Module01IntroductionGit = lazy(() => import("./Level_05_Git_GitHub/Module01IntroductionGit"));
const GIT_Module02BasicCommands = lazy(() => import("./Level_05_Git_GitHub/Module02BasicCommands"));
const GIT_Module03GitHubRemotes = lazy(() => import("./Level_05_Git_GitHub/Module03GitHubRemotes"));
const GIT_Module04Collaboration = lazy(() => import("./Level_05_Git_GitHub/Module04Collaboration"));
const GIT_README = lazy(() => import("./Level_05_Git_GitHub/README"));

// Level 06 — React
const REACT_Module01Introduction = lazy(() => import("./Level_06_React/Module01Introduction"));
const REACT_Module02ComponentsProps = lazy(() => import("./Level_06_React/Module02ComponentsProps"));
const REACT_Module03StateEvents = lazy(() => import("./Level_06_React/Module03StateEvents"));
const REACT_Module04Hooks = lazy(() => import("./Level_06_React/Module04Hooks"));
const REACT_Module05ReactRouter = lazy(() => import("./Level_06_React/Module05ReactRouter"));
const REACT_Module06ProjectTaskManager = lazy(() => import("./Level_06_React/Module06ProjectTaskManager"));
const REACT_README = lazy(() => import("./Level_06_React/README"));

// Level 07 — NextJS & Tailwind
const NEXT_Module01IntroductionNextJS = lazy(() => import("./Level_07_NextJS_Tailwind/Module01IntroductionNextJS"));
const NEXT_Module02TailwindCSS = lazy(() => import("./Level_07_NextJS_Tailwind/Module02TailwindCSS"));
const NEXT_Module03DataFetching = lazy(() => import("./Level_07_NextJS_Tailwind/Module03DataFetching"));
const NEXT_Module04APIRoutes = lazy(() => import("./Level_07_NextJS_Tailwind/Module04APIRoutes"));
const NEXT_Module05Deployment = lazy(() => import("./Level_07_NextJS_Tailwind/Module05Deployment"));
const NEXT_Module06ProjectEcommerce = lazy(() => import("./Level_07_NextJS_Tailwind/Module06ProjectEcommerce"));
const NEXT_README = lazy(() => import("./Level_07_NextJS_Tailwind/README"));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const lessonRegistry: Record<string, ComponentType<any>> = {
  // Foundation
  "computer-foundation-readme": CF_README,
  "computer-foundation-module03linuxterminal": CF_Module03LinuxTerminal,
  "computer-foundation-module04filemanagement": CF_Module04FileManagement,

  // HTML
  "html-module01gettingstarted": Module01GettingStarted,
  "html-module02documentstructure": Module02DocumentStructure,
  "html-module03textandlists": Module03TextandLists,
  "html-module04linksnavigation": Module04LinksNavigation,
  "html-module05imagesmedia": Module05ImagesMedia,
  "html-module06tablesforms": Module06TablesForms,
  "html-module07projectbiopage": Module07ProjectBioPage,
  "html-readme": HTML_README,

  // CSS
  "css-module01introductioncss": CSS_Module01IntroductionCSS,
  "css-module02selectorsspecificity": CSS_Module02SelectorsSpecificity,
  "css-module03colorstypography": CSS_Module03ColorsTypography,
  "css-module04boxmodel": CSS_Module04BoxModel,
  "css-module05layoutpositioning": CSS_Module05LayoutPositioning,
  "css-module06flexboxresponsive": CSS_Module06FlexboxResponsive,
  "css-module07projectportfolio": CSS_Module07ProjectPortfolio,
  "css-readme": CSS_README,

  // JavaScript Basics
  "javascript-module01introduction": JS_Module01Introduction,
  "javascript-module02variablesdatatypes": JS_Module02VariablesDataTypes,
  "javascript-module03operatorsconditions": JS_Module03OperatorsConditions,
  "javascript-module04functions": JS_Module04Functions,
  "javascript-module05arraysloops": JS_Module05ArraysLoops,
  "javascript-module06dommanipulation": JS_Module06DOMManipulation,
  "javascript-module07projectquiz": JS_Module07ProjectQuiz,
  "javascript-readme": JS_README,

  // JavaScript Advanced
  "javascript-advanced-module01es6features": JSA_Module01ES6Features,
  "javascript-advanced-module02asyncjavascript": JSA_Module02AsyncJavaScript,
  "javascript-advanced-module03workingapis": JSA_Module03WorkingAPIs,
  "javascript-advanced-module04errorhandling": JSA_Module04ErrorHandling,
  "javascript-advanced-module05projectweather": JSA_Module05ProjectWeather,
  "javascript-advanced-readme": JSA_README,

  // Git & GitHub
  "git-module01introductiongit": GIT_Module01IntroductionGit,
  "git-module02basiccommands": GIT_Module02BasicCommands,
  "git-module03githubremotes": GIT_Module03GitHubRemotes,
  "git-module04collaboration": GIT_Module04Collaboration,
  "git-readme": GIT_README,

  // React
  "react-module01introduction": REACT_Module01Introduction,
  "react-module02componentsprops": REACT_Module02ComponentsProps,
  "react-module03stateevents": REACT_Module03StateEvents,
  "react-module04hooks": REACT_Module04Hooks,
  "react-module05reactrouter": REACT_Module05ReactRouter,
  "react-module06projecttaskmanager": REACT_Module06ProjectTaskManager,
  "react-readme": REACT_README,

  // NextJS & Tailwind
  "nextjs-module01introductionnextjs": NEXT_Module01IntroductionNextJS,
  "nextjs-module02tailwindcss": NEXT_Module02TailwindCSS,
  "nextjs-module03datafetching": NEXT_Module03DataFetching,
  "nextjs-module04apiroutes": NEXT_Module04APIRoutes,
  "nextjs-module05deployment": NEXT_Module05Deployment,
  "nextjs-module06projectecommerce": NEXT_Module06ProjectEcommerce,
  "nextjs-readme": NEXT_README,
};
