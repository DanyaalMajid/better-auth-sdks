# LinkSocialPostRequestIdToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** |  | 
**nonce** | **str** |  | [optional] 
**access_token** | **str** |  | [optional] 
**refresh_token** | **str** |  | [optional] 
**scopes** | **List[object]** |  | [optional] 

## Example

```python
from better_auth.models.link_social_post_request_id_token import LinkSocialPostRequestIdToken

# TODO update the JSON string below
json = "{}"
# create an instance of LinkSocialPostRequestIdToken from a JSON string
link_social_post_request_id_token_instance = LinkSocialPostRequestIdToken.from_json(json)
# print the JSON string representation of the object
print(LinkSocialPostRequestIdToken.to_json())

# convert the object into a dict
link_social_post_request_id_token_dict = link_social_post_request_id_token_instance.to_dict()
# create an instance of LinkSocialPostRequestIdToken from a dict
link_social_post_request_id_token_from_dict = LinkSocialPostRequestIdToken.from_dict(link_social_post_request_id_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


