export class ApplicationSearchResult {
  environments: Environment[];
}

class Environment {
  name: string;
  tenants: Tenant[];
}

class Tenant {
  name: string;
  application: Application;
}

class Application {
  name: string;
  status: string;
  deployments: Deployment[];
}

class Deployment {
  version: string;
  status: string;
  pods: Pod[];
}

class Pod {
  status: string;
}