import Decimal from 'decimal.js';
import { User } from '../../prisma/generated/prisma';
import { randomUUID } from 'crypto';
import prisma from '@/libs/prisma';

const data: User[] = [
  {
    id: randomUUID(),
    name: 'John',
    dob: new Date('2000-03-09'),
    gender: 'male',
    isActive: true,
    point: 90,
    wallet: new Decimal('100.00')
  },
  {
    id: randomUUID(),
    name: 'Ann',
    dob: new Date('2006-05-19'),
    gender: 'female',
    isActive: false,
    point: 55,
    wallet: new Decimal('250.00')
  },
  {
    id: randomUUID(),
    name: 'Jame',
    dob: new Date('1998-01-12'),
    gender: 'male',
    isActive: true,
    point: 50,
    wallet: new Decimal('77.00')
  }
];

async function seed() {
  await prisma.user.deleteMany();
  await prisma.user.createMany({ data });
}

seed();