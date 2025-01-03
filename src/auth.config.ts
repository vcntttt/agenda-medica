import Google from "next-auth/providers/google"
import Credentials from "next-auth/providers/credentials"

import type { NextAuthConfig } from "next-auth"
 
export default {
  providers: [Google,
    // credentials coming soon
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
    }),
  ]
} satisfies NextAuthConfig