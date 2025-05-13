'use client';
import React from 'react';
import { Base } from '../templates/Base/Base';
import mockBase from '../templates/Base/mockWithChildren.jsx';



export default function Home() {
  return <Base {...mockBase} />;
}
