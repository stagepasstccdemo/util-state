export interface User {
  id: string;
  aud: string;
  role: string;
  email: string;
  email_confirmed_at: string;
  phone: string;
  confirmed_at: string;
  recovery_sent_at: string;
  last_sign_in_at: string;
  app_metadata: {
    provider: string;
    providers: string[];
  };
  user_metadata: {
    avatar_url: string;
    email: string;
    email_verified: boolean;
    full_name: string;
    iss: string;
    name: string;
    picture: string;
    provider_id: string;
    sub: string;
  };
  identities: [
    {
      id: string;
      user_id: string;
      identity_data: {
        email: string;
        sub: string;
      };
      provider: string;
      last_sign_in_at: string;
      created_at: string;
      updated_at: string;
    },
    {
      id: string;
      user_id: string;
      identity_data: {
        avatar_url: string;
        email: string;
        email_verified: boolean;
        full_name: string;
        iss: string;
        name: string;
        picture: string;
        provider_id: string;
        sub: string;
      };
      provider: string;
      last_sign_in_at: string;
      created_at: string;
      updated_at: string;
    }
  ];
  created_at: string;
  updated_at: string;
}
