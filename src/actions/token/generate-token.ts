'use server';

import { TokenLifeSpan, TokenPayload } from '@/types/app';
import { assertIsString } from '@/util/asserts';
import { parsedEnv } from '@/util/helper';
import { SignJWT } from 'jose';

export const generateToken = async <T extends TokenPayload>(
  payload: T,
  lifeSpan: TokenLifeSpan
): Promise<string> => {
  const authSecret = parsedEnv.AUTH_TOKEN_SECRET;
  assertIsString(authSecret);
  const secret = new TextEncoder().encode(authSecret);

  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(lifeSpan)
    .sign(secret);

  return token;
};
