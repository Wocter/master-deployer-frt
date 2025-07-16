import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApplicationSearchResult} from "./model/application.search.result";
import {Tenant} from "./model/application.search.result";
import {ResourceStatus} from "./model/resource-status";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false
})
export class AppComponent {

  applicationNameSearchInput: string = "";
  applicationSearchResult: ApplicationSearchResult | undefined = undefined;

  applicationSearchResultMock: ApplicationSearchResult = {
    "environments": [
      {
        "environment": "TEST",
        "tenants": [
          {
            "name": "syltferry",
            "application": {
              "name": "ferry-boarding-srv-syltferry-test",
              "status": "Unhealthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Unhealthy",
                  "pods": [
                    {
                      "status": "Unhealthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "baltic",
            "application": {
              "name": "ferry-boarding-srv-baltic-test",
              "status": "Syncing",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Syncing",
                  "pods": [
                    {
                      "status": "Syncing"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "rh",
            "application": {
              "name": "ferry-boarding-srv-rh-test",
              "status": "OutOfSync",
              "deployments": [
                {
                  "version": "v1",
                  "status": "OutOfSync",
                  "pods": [
                    {
                      "status": "OutOfSync"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "edi",
            "application": {
              "name": "ferry-boarding-srv-edi-test",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "helgoline",
            "application": {
              "name": "ferry-boarding-srv-helgoline-test",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "clipper",
            "application": {
              "name": "ferry-boarding-srv-clipper-test",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "iberia",
            "application": {
              "name": "ferry-boarding-srv-iberia-test",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "environment": "UAT",
        "tenants": [
          {
            "name": "syltferry",
            "application": {
              "name": "ferry-boarding-srv-syltferry-uat",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "baltic",
            "application": {
              "name": "ferry-boarding-srv-baltic-uat",
              "status": "Syncing",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                },
                {
                  "version": "v2",
                  "status": "Syncing",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Syncing"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "rh",
            "application": {
              "name": "ferry-boarding-srv-rh-uat",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "edi",
            "application": {
              "name": "ferry-boarding-srv-edi-uat",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "helgoline",
            "application": {
              "name": "ferry-boarding-srv-helgoline-uat",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "clipper",
            "application": {
              "name": "ferry-boarding-srv-clipper-uat",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "iberia",
            "application": {
              "name": "ferry-boarding-srv-iberia-uat",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          }
        ]
      },
      {
        "environment": "LIVE",
        "tenants": [
          {
            "name": "syltferry",
            "application": {
              "name": "ferry-boarding-srv-syltferry-live",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "baltic",
            "application": {
              "name": "ferry-boarding-srv-baltic-live",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "rh",
            "application": {
              "name": "ferry-boarding-srv-rh-live",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "edi",
            "application": {
              "name": "ferry-boarding-srv-edi-live",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "helgoline",
            "application": {
              "name": "ferry-boarding-srv-helgoline-live",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Syncing"
                    },
                    {
                      "status": "OutOfSync"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "clipper",
            "application": {
              "name": "ferry-boarding-srv-clipper-live",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          },
          {
            "name": "iberia",
            "application": {
              "name": "ferry-boarding-srv-iberia-live",
              "status": "Healthy",
              "deployments": [
                {
                  "version": "v1",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                },
                {
                  "version": "v2",
                  "status": "Healthy",
                  "pods": [
                    {
                      "status": "Healthy"
                    },
                    {
                      "status": "Unhealthy"
                    },
                    {
                      "status": "Healthy"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    ]
  } as ApplicationSearchResult;

  constructor(private httpClient: HttpClient) {

  }

  onSearchButtonPressed() {
    this.httpClient.get("http://127.0.0.1:8080/master-deployer-srv/1.0/applications/" + this.applicationNameSearchInput + "/summary")
        .subscribe({
          next: (response) => {
            console.log(response);
            this.applicationSearchResult = response as ApplicationSearchResult;
          },
          error: (error) => {
            console.log(error);
            this.applicationSearchResult = this.applicationSearchResultMock;
          },
          complete: () => {
            // Optional: handle completion if needed
          }
        });
  }

  getTenantNames(): string[] {
    const environments = this.applicationSearchResult?.environments || [];
    const tenantSet = new Set<string>();
    environments.forEach(env => {
      env.tenants.forEach(t => tenantSet.add(t.name));
    });
    return Array.from(tenantSet);
  }

  getTenantInEnvironment(environment: any, tenantName: string): any | null {
    return environment.tenants.find((t: Tenant) => t.name === tenantName) || null;
  }

  protected readonly ApplicationStatus = ResourceStatus;
}