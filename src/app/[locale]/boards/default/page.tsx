import React from 'react';
import {
  CardContent, CardDescription, CardHeader, CardTitle,
} from 'components/@common/Card';
import KanbanBoard from 'components/@home/KanbanBoard';
import MainNavigation from 'components/@navigation/MainNavigation';

const DefaultBoardPage = () => (
  <>
    <MainNavigation />
    <CardHeader>
      <CardTitle>Task Management Tool</CardTitle>
      <CardDescription>
        Start by creating your own task.
      </CardDescription>
    </CardHeader>
    <CardContent>
      <KanbanBoard />
    </CardContent>
  </>
);

export default DefaultBoardPage;
