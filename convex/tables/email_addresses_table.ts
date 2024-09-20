import { zEmailAddressDto } from '@/api/validators';
import { zodToConvex } from 'convex-helpers/server/zod';
import { defineTable } from 'convex/server';

export const emailAddressesTable = defineTable(
  zodToConvex(zEmailAddressDto)
).index('by_email', ['email']);