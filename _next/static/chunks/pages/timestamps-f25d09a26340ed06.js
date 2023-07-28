(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[14],{6220:function(s,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/timestamps",function(){return t(1109)}])},1109:function(s,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return i}});var e=t(5893),o=t(1151);function a(s){let n=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",a:"a",pre:"pre"},(0,o.ah)(),s.components),{Note:t,CodeGroup:a}=n;return a||r("CodeGroup",!0),t||r("Note",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(n.h1,{children:"Timestamps"}),"\n",(0,e.jsx)(n.p,{children:"The tools library offers a comprehensive set of methods to efficiently calculate and handle\ntimestamps. With these tools, you can effortlessly access various segments of a given epoch\ntime, such as seconds, years, months, weeks, days, hours, and minutes. Additionally, you can\ncompare two timestamps and calculate their time differences in all available segments.\nThe library also provides a convenient method to get a human-readable formatted output,\nbreaking down the time difference into years, months, weeks, days, hours, minutes, and\nseconds by default. Moreover, you have the flexibility to customize the output by excluding\nspecific segments. For instance, you can omit years and weeks to format the output with\nonly days, hours, minutes, and seconds."}),"\n",(0,e.jsx)(t,{children:(0,e.jsxs)(n.p,{children:["For all the examples in this page, ",(0,e.jsx)(n.code,{children:"tools"})," is used as a namespace for the tools library.\nIf you are following along with the examples, please make sure to import the latest\nversion of the library in your script first, and assign ",(0,e.jsx)(n.code,{children:"tools"})," as namespace."]})}),"\n",(0,e.jsx)(n.h2,{id:"time-segments",children:"Time segments"}),"\n",(0,e.jsxs)(n.p,{children:["The tools library offers a range of convenient methods to break down a given epoch timestamp into\nspecific time segments. Additionally, if you provide a second timestamp, these methods can calculate\nthe time difference between the two given times. This makes it easy to access and work with various\nsegments of time, providing valuable insights and aiding in time-related calculations. Available time\nsegments breakdown: ",(0,e.jsx)(n.a,{href:"/_timestamp#years",children:(0,e.jsx)(n.code,{children:"_years()"})}),", ",(0,e.jsx)(n.a,{href:"/_timestamp#months",children:(0,e.jsx)(n.code,{children:"_months()"})}),",\n",(0,e.jsx)(n.a,{href:"/_timestamp#weeks",children:(0,e.jsx)(n.code,{children:"_weeks()"})}),", ",(0,e.jsx)(n.a,{href:"/_timestamp#days",children:(0,e.jsx)(n.code,{children:"_days()"})}),", ",(0,e.jsx)(n.a,{href:"/_timestamp#hours",children:(0,e.jsx)(n.code,{children:"_hours()"})}),",\n",(0,e.jsx)(n.a,{href:"/_timestamp#minutes",children:(0,e.jsx)(n.code,{children:"_minutes()"})}),", and ",(0,e.jsx)(n.a,{href:"/_timestamp#seconds",children:(0,e.jsx)(n.code,{children:"_seconds()"})}),"."]}),"\n",(0,e.jsxs)(a,{children:[(0,e.jsx)(n.pre,{language:"js",code:"// Example timestamps used:\nvar timestamp1 = 1690356056000 // 2023-07-26 03:20:56 AM GMT\nvar timestamp2 = 1389514846000 // 2014-01-12 03:20:46 AM GMT\n\n// Segments: (casting to integer to discard any remainder values).\n\n// Years\nint(timestamp1.tools._years())              // returns 53. (53 years since 1970).\nint(timestamp1.tools._years(timestamp2))    // returns 9. (9 years difference).\n\n// Months\nint(timestamp1.tools._months())             // returns 642. (642 months since 1970).\nint(timestamp1.tools._months(timestamp2))   // returns 114. (114 months difference).\n\n// Weeks\nint(timestamp1.tools._weeks())              // returns 2794. (2794 weeks since 1970).\nint(timestamp1.tools._weeks(timestamp2))    // returns 497. (497 weeks difference).\n\n// Days\nint(timestamp1.tools._days())               // returns 19564. (19564 days since 1970).\nint(timestamp1.tools._days(timestamp2))     // returns 3481. (3481 days difference).\n\n// Hours\nint(timestamp1.tools._hours())              // returns 469543. (469543 hours since 1970).\nint(timestamp1.tools._hours(timestamp2))    // returns 83567. (83567 hours difference).\n\n// Minutes\nint(timestamp1.tools._minutes())            // returns 28172600. (28172600 minutes since 1970).\nint(timestamp1.tools._minutes(timestamp2))  // returns 5014020. (5014020 minutes difference).\n\n// Seconds\nint(timestamp1.tools._seconds())            // returns 1690356056. (1690356056 seconds since 1970).\nint(timestamp1.tools._seconds(timestamp2))  // returns 300841210. (300841210 seconds difference).\n",children:(0,e.jsx)(n.code,{className:"language-js",children:'<span><span style="color: var(--shiki-token-comment)">// Example timestamps used:</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp1 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1690356056000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2023-07-26 03:20:56 AM GMT</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp2 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1389514846000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2014-01-12 03:20:46 AM GMT</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Segments: (casting to integer to discard any remainder values).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Years</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._years</span><span style="color: var(--shiki-color-text)">())              </span><span style="color: var(--shiki-token-comment)">// returns 53. (53 years since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._years</span><span style="color: var(--shiki-color-text)">(timestamp2))    </span><span style="color: var(--shiki-token-comment)">// returns 9. (9 years difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Months</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._months</span><span style="color: var(--shiki-color-text)">())             </span><span style="color: var(--shiki-token-comment)">// returns 642. (642 months since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._months</span><span style="color: var(--shiki-color-text)">(timestamp2))   </span><span style="color: var(--shiki-token-comment)">// returns 114. (114 months difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Weeks</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._weeks</span><span style="color: var(--shiki-color-text)">())              </span><span style="color: var(--shiki-token-comment)">// returns 2794. (2794 weeks since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._weeks</span><span style="color: var(--shiki-color-text)">(timestamp2))    </span><span style="color: var(--shiki-token-comment)">// returns 497. (497 weeks difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Days</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._days</span><span style="color: var(--shiki-color-text)">())               </span><span style="color: var(--shiki-token-comment)">// returns 19564. (19564 days since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._days</span><span style="color: var(--shiki-color-text)">(timestamp2))     </span><span style="color: var(--shiki-token-comment)">// returns 3481. (3481 days difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Hours</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._hours</span><span style="color: var(--shiki-color-text)">())              </span><span style="color: var(--shiki-token-comment)">// returns 469543. (469543 hours since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._hours</span><span style="color: var(--shiki-color-text)">(timestamp2))    </span><span style="color: var(--shiki-token-comment)">// returns 83567. (83567 hours difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Minutes</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._minutes</span><span style="color: var(--shiki-color-text)">())            </span><span style="color: var(--shiki-token-comment)">// returns 28172600. (28172600 minutes since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._minutes</span><span style="color: var(--shiki-color-text)">(timestamp2))  </span><span style="color: var(--shiki-token-comment)">// returns 5014020. (5014020 minutes difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Seconds</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._seconds</span><span style="color: var(--shiki-color-text)">())            </span><span style="color: var(--shiki-token-comment)">// returns 1690356056. (1690356056 seconds since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._seconds</span><span style="color: var(--shiki-color-text)">(timestamp2))  </span><span style="color: var(--shiki-token-comment)">// returns 300841210. (300841210 seconds difference).</span></span>\n<span></span>'}),title:"Method"}),(0,e.jsx)(n.pre,{language:"js",code:"// Example timestamps used:\nvar timestamp1 = 1690356056000 // 2023-07-26 03:20:56 AM GMT\nvar timestamp2 = 1389514846000 // 2014-01-12 03:20:46 AM GMT\n\n// Segments: (casting to integer to discard any remainder values).\n\n// Years\nint(tools._years(timestamp1))               // returns 53. (53 years since 1970).\nint(tools._years(timestamp1, timestamp2))   // returns 9. (9 years difference).\n\n// Months\nint(tools._months(timestamp1))              // returns 642. (642 months since 1970).\nint(tools._months(timestamp1, timestamp2))  // returns 114. (114 months difference).\n\n// Weeks\nint(tools._weeks(timestamp1))               // returns 2794. (2794 weeks since 1970).\nint(tools._weeks(timestamp1, timestamp2))   // returns 497. (497 weeks difference).\n\n// Days\nint(tools._days(timestamp1))                // returns 19564. (19564 days since 1970).\nint(tools._days(timestamp1, timestamp2))    // returns 3481. (3481 days difference).\n\n// Hours\nint(tools._hours(timestamp1))               // returns 469543. (469543 hours since 1970).\nint(tools._hours(timestamp1, timestamp2))   // returns 83567. (83567 hours difference).\n\n// Minutes\nint(tools._minutes(timestamp1))             // returns 28172600. (28172600 minutes since 1970).\nint(tools._minutes(timestamp1, timestamp2)) // returns 5014020. (5014020 minutes difference).\n\n// Seconds\nint(tools._seconds(timestamp1))             // returns 1690356056. (1690356056 seconds since 1970).\nint(tools._seconds(timestamp1, timestamp2)) // returns 300841210. (300841210 seconds difference).\n",children:(0,e.jsx)(n.code,{className:"language-js",children:'<span><span style="color: var(--shiki-token-comment)">// Example timestamps used:</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp1 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1690356056000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2023-07-26 03:20:56 AM GMT</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp2 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1389514846000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2014-01-12 03:20:46 AM GMT</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Segments: (casting to integer to discard any remainder values).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Years</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._years</span><span style="color: var(--shiki-color-text)">(timestamp1))               </span><span style="color: var(--shiki-token-comment)">// returns 53. (53 years since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._years</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2))   </span><span style="color: var(--shiki-token-comment)">// returns 9. (9 years difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Months</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._months</span><span style="color: var(--shiki-color-text)">(timestamp1))              </span><span style="color: var(--shiki-token-comment)">// returns 642. (642 months since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._months</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2))  </span><span style="color: var(--shiki-token-comment)">// returns 114. (114 months difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Weeks</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._weeks</span><span style="color: var(--shiki-color-text)">(timestamp1))               </span><span style="color: var(--shiki-token-comment)">// returns 2794. (2794 weeks since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._weeks</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2))   </span><span style="color: var(--shiki-token-comment)">// returns 497. (497 weeks difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Days</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._days</span><span style="color: var(--shiki-color-text)">(timestamp1))                </span><span style="color: var(--shiki-token-comment)">// returns 19564. (19564 days since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._days</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2))    </span><span style="color: var(--shiki-token-comment)">// returns 3481. (3481 days difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Hours</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._hours</span><span style="color: var(--shiki-color-text)">(timestamp1))               </span><span style="color: var(--shiki-token-comment)">// returns 469543. (469543 hours since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._hours</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2))   </span><span style="color: var(--shiki-token-comment)">// returns 83567. (83567 hours difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Minutes</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._minutes</span><span style="color: var(--shiki-color-text)">(timestamp1))             </span><span style="color: var(--shiki-token-comment)">// returns 28172600. (28172600 minutes since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._minutes</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2)) </span><span style="color: var(--shiki-token-comment)">// returns 5014020. (5014020 minutes difference).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Seconds</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._seconds</span><span style="color: var(--shiki-color-text)">(timestamp1))             </span><span style="color: var(--shiki-token-comment)">// returns 1690356056. (1690356056 seconds since 1970).</span></span>\n<span><span style="color: var(--shiki-token-function)">int</span><span style="color: var(--shiki-color-text)">(</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._seconds</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2)) </span><span style="color: var(--shiki-token-comment)">// returns 300841210. (300841210 seconds difference).</span></span>\n<span></span>'}),title:"Function"})]}),"\n",(0,e.jsx)(n.h2,{id:"formatted-time-difference",children:"Formatted time difference"}),"\n",(0,e.jsxs)(n.p,{children:["If you prefer a neatly formatted human-readable time difference utilizing all or a selection of time\nsegments, you can conveniently use the method ",(0,e.jsx)(n.a,{href:"/_timestamp#get-time-difference",children:(0,e.jsx)(n.code,{children:"_getTimeDifference()"})}),".\nThis method will return the time difference in a user-friendly manner, making it easy to comprehend\nspecific time units as needed."]}),"\n",(0,e.jsxs)(a,{children:[(0,e.jsx)(n.pre,{language:"js",code:"// Example timestamps used:\nvar timestamp1 = 1690356056000 // 2023-07-26 03:20:56 AM GMT\nvar timestamp2 = 1389514846000 // 2014-01-12 03:20:46 AM GMT\n\n// Get the time difference between timestamp1 and timenow.\ntimestamp1.tools._getTimeDifference()             \n// returns '1 day, 12 hours, 37 minutes, and 18 seconds' (based on my current time of writing this).\n\n// Get the time difference between timestamp1 and timestamp2.\ntimestamp1.tools._getTimeDifference(timestamp2)   \n// returns '9 years, 6 months, 2 weeks, 7 hours, 38 minutes, and 34 seconds.\n\n// Get the time difference between timestamp1 and timestamp2. \n// By default, all segments - years, months, weeks, days, hours, minutes, and seconds - are included. \n// To customize the output, just turn off the segments you want to omit.\n// Example with switching months and weeks off.\ntimestamp1.tools._getTimeDifference(timestamp2, months=false, weeks=false)  \n// returns '9 years, 196 days, 23 hours, and 10 seconds.\n",children:(0,e.jsx)(n.code,{className:"language-js",children:'<span><span style="color: var(--shiki-token-comment)">// Example timestamps used:</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp1 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1690356056000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2023-07-26 03:20:56 AM GMT</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp2 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1389514846000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2014-01-12 03:20:46 AM GMT</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Get the time difference between timestamp1 and timenow.</span></span>\n<span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._getTimeDifference</span><span style="color: var(--shiki-color-text)">()             </span></span>\n<span><span style="color: var(--shiki-token-comment)">// returns &#39;1 day, 12 hours, 37 minutes, and 18 seconds&#39; (based on my current time of writing this).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Get the time difference between timestamp1 and timestamp2.</span></span>\n<span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._getTimeDifference</span><span style="color: var(--shiki-color-text)">(timestamp2)   </span></span>\n<span><span style="color: var(--shiki-token-comment)">// returns &#39;9 years, 6 months, 2 weeks, 7 hours, 38 minutes, and 34 seconds.</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Get the time difference between timestamp1 and timestamp2. </span></span>\n<span><span style="color: var(--shiki-token-comment)">// By default, all segments - years, months, weeks, days, hours, minutes, and seconds - are included. </span></span>\n<span><span style="color: var(--shiki-token-comment)">// To customize the output, just turn off the segments you want to omit.</span></span>\n<span><span style="color: var(--shiki-token-comment)">// Example with switching months and weeks off.</span></span>\n<span><span style="color: var(--shiki-token-constant)">timestamp1</span><span style="color: var(--shiki-token-function)">.</span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._getTimeDifference</span><span style="color: var(--shiki-color-text)">(timestamp2</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> months</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> weeks</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)  </span></span>\n<span><span style="color: var(--shiki-token-comment)">// returns &#39;9 years, 196 days, 23 hours, and 10 seconds.</span></span>\n<span></span>'}),title:"Method"}),(0,e.jsx)(n.pre,{language:"js",code:"// Example timestamps used:\nvar timestamp1 = 1690356056000 // 2023-07-26 03:20:56 AM GMT\nvar timestamp2 = 1389514846000 // 2014-01-12 03:20:46 AM GMT\n\n// Get the time difference between timestamp1 and timenow.\ntools._getTimeDifference(timestamp1)             \n// returns '1 day, 12 hours, 37 minutes, and 18 seconds' (based on current time of writing this).\n\n// Get the time difference between timestamp1 and timestamp2.\ntools._getTimeDifference(timestamp1, timestamp2)   \n// returns '9 years, 6 months, 2 weeks, 7 hours, 38 minutes, and 34 seconds.\n\n// Get the time difference between timestamp1 and timestamp2. \n// By default, all segments years, months, weeks, days, hours, minutes, and seconds are included. \n// To customize the output, just turn off the segments you want to omit.\n// Example with switching months and weeks off.\ntools._getTimeDifference(timestamp1, timestamp2, months=false, weeks=false)  \n// returns '9 years, 196 days, 23 hours, and 10 seconds'.\n",children:(0,e.jsx)(n.code,{className:"language-js",children:'<span><span style="color: var(--shiki-token-comment)">// Example timestamps used:</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp1 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1690356056000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2023-07-26 03:20:56 AM GMT</span></span>\n<span><span style="color: var(--shiki-token-keyword)">var</span><span style="color: var(--shiki-color-text)"> timestamp2 </span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-constant)">1389514846000</span><span style="color: var(--shiki-color-text)"> </span><span style="color: var(--shiki-token-comment)">// 2014-01-12 03:20:46 AM GMT</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Get the time difference between timestamp1 and timenow.</span></span>\n<span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._getTimeDifference</span><span style="color: var(--shiki-color-text)">(timestamp1)             </span></span>\n<span><span style="color: var(--shiki-token-comment)">// returns &#39;1 day, 12 hours, 37 minutes, and 18 seconds&#39; (based on current time of writing this).</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Get the time difference between timestamp1 and timestamp2.</span></span>\n<span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._getTimeDifference</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2)   </span></span>\n<span><span style="color: var(--shiki-token-comment)">// returns &#39;9 years, 6 months, 2 weeks, 7 hours, 38 minutes, and 34 seconds.</span></span>\n<span></span>\n<span><span style="color: var(--shiki-token-comment)">// Get the time difference between timestamp1 and timestamp2. </span></span>\n<span><span style="color: var(--shiki-token-comment)">// By default, all segments years, months, weeks, days, hours, minutes, and seconds are included. </span></span>\n<span><span style="color: var(--shiki-token-comment)">// To customize the output, just turn off the segments you want to omit.</span></span>\n<span><span style="color: var(--shiki-token-comment)">// Example with switching months and weeks off.</span></span>\n<span><span style="color: var(--shiki-token-constant)">tools</span><span style="color: var(--shiki-token-function)">._getTimeDifference</span><span style="color: var(--shiki-color-text)">(timestamp1</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> timestamp2</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> months</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-token-punctuation)">,</span><span style="color: var(--shiki-color-text)"> weeks</span><span style="color: var(--shiki-token-keyword)">=</span><span style="color: var(--shiki-token-constant)">false</span><span style="color: var(--shiki-color-text)">)  </span></span>\n<span><span style="color: var(--shiki-token-comment)">// returns &#39;9 years, 196 days, 23 hours, and 10 seconds&#39;.</span></span>\n<span></span>'}),title:"Function"})]})]})}var i=!0;function r(s,n){throw Error("Expected "+(n?"component":"object")+" `"+s+"` to be defined: you likely forgot to import, pass, or provide it.")}n.default=function(){let s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,o.ah)(),s.components);return n?(0,e.jsx)(n,Object.assign({},s,{children:(0,e.jsx)(a,s)})):a(s)}}},function(s){s.O(0,[774,888,179],function(){return s(s.s=6220)}),_N_E=s.O()}]);