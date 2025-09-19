# OrganizationSetActivePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**organization_id** | **str** |  | [optional] 
**organization_slug** | **str** | The organization slug to set as active. It can be null to unset the active organization if organizationId is not provided. Eg: \&quot;org-slug\&quot; | [optional] 

## Example

```python
from better_auth.models.organization_set_active_post_request import OrganizationSetActivePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationSetActivePostRequest from a JSON string
organization_set_active_post_request_instance = OrganizationSetActivePostRequest.from_json(json)
# print the JSON string representation of the object
print(OrganizationSetActivePostRequest.to_json())

# convert the object into a dict
organization_set_active_post_request_dict = organization_set_active_post_request_instance.to_dict()
# create an instance of OrganizationSetActivePostRequest from a dict
organization_set_active_post_request_from_dict = OrganizationSetActivePostRequest.from_dict(organization_set_active_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


