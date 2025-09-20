# OrganizationRemoveMemberPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**member** | [**OrganizationGetActiveMemberGet200Response**](OrganizationGetActiveMemberGet200Response.md) |  | 

## Example

```python
from better_auth.models.organization_remove_member_post200_response import OrganizationRemoveMemberPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OrganizationRemoveMemberPost200Response from a JSON string
organization_remove_member_post200_response_instance = OrganizationRemoveMemberPost200Response.from_json(json)
# print the JSON string representation of the object
print(OrganizationRemoveMemberPost200Response.to_json())

# convert the object into a dict
organization_remove_member_post200_response_dict = organization_remove_member_post200_response_instance.to_dict()
# create an instance of OrganizationRemoveMemberPost200Response from a dict
organization_remove_member_post200_response_from_dict = OrganizationRemoveMemberPost200Response.from_dict(organization_remove_member_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


