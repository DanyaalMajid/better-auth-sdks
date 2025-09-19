# OrganizationCreatePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the organization | 
**slug** | **str** | The slug of the organization | 
**user_id** | **str** | The user id of the organization creator. If not provided, the current user will be used. Should only be used by admins or when called by the server. server-only. Eg: \&quot;user-id\&quot; | [optional] 
**logo** | **str** | The logo of the organization | [optional] 
**metadata** | **str** | The metadata of the organization | [optional] 
**keep_current_active_organization** | **bool** | Whether to keep the current active organization active after creating a new one. Eg: true | [optional] 

## Example

```python
from better_auth.models.organization_create_post_request import OrganizationCreatePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationCreatePostRequest from a JSON string
organization_create_post_request_instance = OrganizationCreatePostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationCreatePostRequest.to_json())

# convert the object into a dict
organization_create_post_request_dict = organization_create_post_request_instance.to_dict()
# create an instance of OrganizationCreatePostRequest from a dict
organization_create_post_request_from_dict = OrganizationCreatePostRequest.from_dict(organization_create_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


