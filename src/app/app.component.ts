import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApplicationSearchResult} from "./model/application.search.result";

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
    environments: [
      {
        name: 'Development',
        tenants: [
          {
            name: 'Tenant A',
            application: {
              name: 'App 1',
              status: 'Active',
              deployments: [
                {
                  version: '1.0.0',
                  status: 'Deployed',
                  pods: [
                    {status: 'Running'},
                    {status: 'Running'},
                  ],
                },
                {
                  version: '1.1.0',
                  status: 'Pending',
                  pods: [
                    {status: 'Pending'},
                  ],
                },
              ],
            },
          },
          {
            name: 'Tenant B',
            application: {
              name: 'App 2',
              status: 'Inactive',
              deployments: [
                {
                  version: '2.0.0',
                  status: 'Failed',
                  pods: [
                    {status: 'Failed'},
                    {status: 'Failed'},
                  ],
                },
              ],
            },
          },
        ],
      },
      {
        name: 'Production',
        tenants: [
          {
            name: 'Tenant C',
            application: {
              name: 'App 3',
              status: 'Active',
              deployments: [
                {
                  version: '3.0.0',
                  status: 'Deployed',
                  pods: [
                    {status: 'Running'},
                    {status: 'Running'},
                    {status: 'Running'},
                  ],
                },
              ],
            },
          },
        ],
      },
    ],
  } as ApplicationSearchResult;

  constructor(private httpClient: HttpClient) {

  }

  onSearchButtonPressed() {
    this.httpClient.get("http://127.0.0.1:8080/master-deployer-srv/1.0/applications/" + this.applicationNameSearchInput + "/summary")
        .subscribe((response: Object) => {
          this.applicationSearchResult = response as ApplicationSearchResult;
        }, error => {
          console.log(error);
          this.applicationSearchResult = this.applicationSearchResultMock;
        });
  }
}