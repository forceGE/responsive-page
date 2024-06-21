import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import TodosList from './TodosList.jsx';
import TodosAmount from './TodosAmount.jsx';

import { customSelectors } from '../../slices/todosSlice.js';

const TodosTabs = () => {
  const { t } = useTranslation();

  const allTodos = useSelector(customSelectors.allTodos);
  const doneTodos = useSelector(customSelectors.doneTodos);
  const notDoneTodos = useSelector(customSelectors.notDoneTodos);

  return (
    <Tabs
      defaultActiveKey="all"
      transition={false}
      id="fill-tab-example"
      className="bg-dark mb-3"
      justify
    >
      <Tab eventKey="all" title={t('tabs.allTodos')}>
        <div className="amount-container all">
          <TodosAmount todos={allTodos} />
        </div>
        <TodosList todos={allTodos} />
      </Tab>
      <Tab eventKey="done" title={t('tabs.done')}>
        <div className="amount-container done">
          <TodosAmount todos={doneTodos} />
        </div>
        <TodosList todos={doneTodos} />
      </Tab>
      <Tab eventKey="notDone" title={t('tabs.notDone')}>
        <div className="amount-container not-done">
          <TodosAmount todos={notDoneTodos} />
        </div>
        <TodosList todos={notDoneTodos} />
      </Tab>
    </Tabs>
  );
};

export default TodosTabs;
